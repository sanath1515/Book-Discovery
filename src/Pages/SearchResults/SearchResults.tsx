import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Dropdown from "../../components/molecules/DropDown/Dropdown";
import BookCard from "../../components/organisms/BookCard/BookCard";
import Pagination from "../../components/molecules/PaginationBox/Pagination";
import Header from "../../components/organisms/Header/Header";
import { bookProp } from "../../data/type";
import { sortOrder, categories, bookDescription } from "./constants";
import theme from "../../theme/theme";
import { COLORS } from "../../theme/constants";
import { useDispatch } from "react-redux";
import { getAllBooks } from "../ApiProvider";

const useStyles = makeStyles({
	mainroot: {
		marginLeft: "auto",
		marginRight: "auto",
		width: "79%",
		display: "flex",
		flexWrap: "wrap",
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		columnGap: "30px",
		rowGap: "30px",
		justifyContent: "center",
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	footer: {
		display: "flex",
		justifyContent: "center",
		marginBottom: theme.spacing(17.5),
		marginTop: theme.spacing(8.75),
	},
	top: {
		width: "100%",
		display: "flex",
		marginTop: theme.spacing(7.5),
		marginBottom: theme.spacing(7),
		columnGap: "24px",
		float: "left",
	},
	typography: {
		display: "flex",
		float: "left",
	},
	typo: {
		fontSize: "22px",
		height: "34px",
		margin: theme.spacing(0, 2, 4.25, 0),
		color: COLORS.GREY,
	},
	typo1: {
		height: "32px",
		margin: theme.spacing(0, 0, 4.5, 0.75),
		fontSize: "22px",
		color: COLORS.GREY,
	},
	typo2: {
		height: "24px",
		margin: theme.spacing(1.5, 28, 4.75, 3.25),
		color: COLORS.ICON_500,
	},
	main: {
		margin: "auto",
		width: "100%",
		maxWidth: "1440px",
	},
});

export type SearchResultProps = {
	searchText: string;
	searchByAuthor: boolean;
};

const SearchResult: React.FC<SearchResultProps> = ({
	searchText,
	searchByAuthor,
}) => {
	const [searchBooks, setSearchBooks] = useState([]);
	const [categoryBooks, setCategoryBooks] = useState([]);
	const [booksData, setBooksData] = useState([]);
	const [sort, setSort] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage, setBooksPerPage] = useState(8);
	const [selectedOrder, setSelectedOrder] = useState<string>("");
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();

	useEffect(() => {
		getAllBooks((res: any) => {
			setSearchBooks(res);
			setCategoryBooks(res);
			setBooksData(res);
		});
		setCurrentPage(1);
		setCategory("");
		setSelectedCategory("");
		setSelectedOrder("");
	}, [searchText]);

	const classes = useStyles();

	const compareObjects = (
		object1: bookProp,
		object2: bookProp,
		sortOrder: string
	) => {
		const obj1 = object1!.title!.toUpperCase();
		const obj2 = object2!.title!.toUpperCase();

		if (sortOrder === "2") {
			return obj1 > obj2 ? 1 : -1;
		} else if (sortOrder === "3") {
			return obj1 < obj2 ? 1 : -1;
		}
		return 0;
	};

	const onChange = (event: any) => {
		setSelectedOrder(event.target.value as string);
		setSort(event.target.value as string);
		if (event.target.value == "1") {
			let newBooks = searchBooks.sort((book1: bookProp, book2: bookProp) => {
				return parseInt(book1!.id!) - parseInt(book2!.id!);
			});
			setSearchBooks(newBooks);
			let newBooks1 = categoryBooks.sort((book1: bookProp, book2: bookProp) => {
				return parseInt(book1!.id!) - parseInt(book2!.id!);
			});
			setSearchBooks(newBooks1);
		} else {
			let newBooks = searchBooks.sort((book1, book2) => {
				return compareObjects(book1, book2, event.target.value as string);
			});
			setSearchBooks(newBooks);
			let newBooks1 = categoryBooks.sort((book1, book2) => {
				return compareObjects(book1, book2, event.target.value as string);
			});
			setSearchBooks(newBooks1);
		}
	};

	const onCategoryChange = (event: any) => {
		getPage(1);

		setSelectedCategory(event.target.value as string);
		if (event.target.value === "1") {
			let newBooksAfterSort = booksData.sort((book1, book2) => {
				return compareObjects(book1, book2, sort);
			});
			setCategory("NONE");
			setCategoryBooks(newBooksAfterSort);
			return;
		} else {
			const category = categories.find(
				category => category.id == event.target.value
			);
			const newBooks = booksData.filter(
				(book: any) => book.category == category?.name
			);
			setCategory(category!.name!);
			const newBooksAfterSort = newBooks.sort((book1, book2) => {
				return compareObjects(book1, book2, sort);
			});
			setCategoryBooks(newBooksAfterSort);
		}
		dispatch({
			type: "SET_CATEGORY",
			payload: categories.find(category => category.id == event.target.value)
				?.name,
		});
	};

	const indexOfLastBook = currentPage * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const finalCategoryBooks = categoryBooks.slice(
		indexOfFirstBook,
		indexOfLastBook
	);

	var filteredSearchBooks;
	if (searchByAuthor) {
		if (searchText !== "") {
			filteredSearchBooks = searchBooks.filter(
				(book: bookProp) =>
					(book.title &&
						book.title
							.toLowerCase()
							.replace(/ /g, "")
							.includes(searchText.toLowerCase().replace(/ /g, ""))) ||
					(book.author &&
						book.author
							.toLowerCase()
							.replace(/ /g, "")
							.includes(searchText.toLowerCase().replace(/ /g, "")))
			);
		} else {
			filteredSearchBooks = searchBooks.filter(
				(book: bookProp) => book.category !== searchText
			);
		}
	} else {
		if (searchText !== "") {
			filteredSearchBooks = searchBooks.filter(
				(book: bookProp) =>
					book.category &&
					book.category
						.toLowerCase()
						.replace(/ /g, "")
						.includes(searchText.toLowerCase().replace(/ /g, ""))
			);
		} else {
			filteredSearchBooks = searchBooks.filter(
				(book: bookProp) => book.category !== searchText
			);
		}
	}

	const finalSearchBooks = filteredSearchBooks.slice(
		indexOfFirstBook,
		indexOfLastBook
	);

	const getPage = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		setPage(pageNumber);
	};

	const onPageChange = (unknown: any, page: number) => {
		getPage(page);
	};

	let searchValue = category !== "" ? category : searchText;
	let dropdownCategory = categories.find(
		category => category.name === searchValue
	);
	return (
		<div className={classes.main}>
			<Header />
			<Grid>
				<Grid className={classes.mainroot}>
					<Grid className={classes.top}>
						<Grid>
							<Dropdown
								onChange={onChange}
								items={sortOrder}
								placeHolderText="Sort by"
								selectedId={selectedOrder}
								valueSelected={selectedOrder == "1" ? "NONE" : ""}
								testId="sortdropdown"
							/>
						</Grid>
						<Grid>
							<Dropdown
								onChange={onCategoryChange}
								items={categories}
								placeHolderText="Categories"
								selectedId={dropdownCategory ? dropdownCategory?.id : ""}
								valueSelected={
									dropdownCategory
										? dropdownCategory?.id == "1"
											? "NONE"
											: ""
										: ""
								}
								testId="categorydropdown"
							/>
						</Grid>
					</Grid>
					<Grid className={classes.typography}>
						<Typography
							variant="h5"
							children="Search Results for"
							className={classes.typo}
						></Typography>
						<Typography
							variant="h3"
							data-testid="search"
							children={
								category !== "" ? ` " ${category}" ` : ` " ${searchText}" `
							}
							className={classes.typo1}
						></Typography>
						<Typography
							variant="subtitle1"
							children="1-10 page of 1228 results"
							className={classes.typo2}
						></Typography>
					</Grid>
					<Grid className={classes.root}>
						{category !== ""
							? finalCategoryBooks.map((book: bookProp, index) => {
									return (
										<BookCard
											key={index}
											id={book!.id!}
											title={book!.title!}
											desc={bookDescription}
											authorName={book!.author!}
											image={book!.bookImage!}
											authorImg={book!.authorImage!}
										/>
									);
							  })
							: finalSearchBooks.map((book: bookProp, index) => {
									return (
										<BookCard
											key={index}
											id={book!.id!}
											title={book!.title!}
											desc={bookDescription}
											authorName={book!.author!}
											image={book!.bookImage!}
											authorImg={book!.authorImage!}
										/>
									);
							  })}
					</Grid>
				</Grid>
				<Grid className={classes.footer}>
					{category !== "" ? (
						<Pagination
							page={page}
							booksPerPage={booksPerPage}
							totalBooks={categoryBooks.length}
							getPage={getPage}
							onChange={onPageChange}
						/>
					) : (
						<Pagination
							page={page}
							booksPerPage={booksPerPage}
							totalBooks={filteredSearchBooks.length}
							getPage={getPage}
							onChange={onPageChange}
						/>
					)}
				</Grid>
			</Grid>
		</div>
	);
};

export default SearchResult;
