import InputField from "../../atoms/InputField";
import { makeStyles, MenuItem, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import SearchResultCard from "../../molecules/SearchResultCard/SearchResultCard";
import { COLORS } from "../../../theme/constants";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { bookProp } from "../../../data/type";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getAllBooks } from "../../pages/ApiProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5, 1),
    display: "flex",
    alignItems: "center",
    width: 380,
    margin: "0",
    boxShadow: "none",
    flex: "null",
    border: "1px solid",
    borderColor: COLORS.GREY_300,
    borderRadius: "1px",
    zIndex: 3,
    marginRight:theme.spacing(2)
  },
  icon: {
    marginLeft: theme.spacing(2.5),
    marginRight: theme.spacing(3.5),

    color: COLORS.ICON_500,
  },
  closeIcon: {
    marginLeft: "auto",
    color: COLORS.ICON_500,
    fontSize: "20px",
  },
  flex: {
    flex: "column",
  },
  flexRow: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 18),
    borderRadius: "4px",
    boxShadow: "none",
    border: "1px solid",
    backgroundColor: "white",
    borderColor: COLORS.GREY_300,
    color: COLORS.PRIMARY_COLOR_500,
    zIndex: 1,
    cursor: "pointer",
  },
  searchBooks: {
    backgroundColor: "white",
    width: "390px",
    position: "relative",
    top: "5px",
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    padding: 0,
    zIndex: 1,
  },
  noResults: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 12),
    borderRadius: "4px",
    boxShadow: "none",
    border: "1px solid",
    borderColor: COLORS.GREY_300,
    backgroundColor: "white",
    zIndex: 1,
  },
  icon1: {
    width: "12px",
    height: "22px",
    color: COLORS.PRIMAY_500,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),

    cursor: "pointer",
  },
}));

export type SearchBarProps = {
  type?: string;
  searchValue?: string;
  placeholder: string;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  className,
}) => {
  const classes = useStyles();
  const [bookData, setBookData] = useState<bookProp[]>([]);

  const [filterBooks, setFilterBooks] = useState<bookProp[]>([]);

  const [expand, setExpand] = useState(false);

  const [type, setType] = useState("0");

  const dispatch = useDispatch();
  const history = useHistory();

  const check = (tempDataItem: bookProp, str: string) => {
    return (
      tempDataItem.title!.toLowerCase().includes(str.toLowerCase()) ||
      tempDataItem.author!.toLowerCase().includes(str.toLowerCase())
    );
  };

  useEffect(() => {
    getAllBooks((res:bookProp[])=>{setBookData(res)});
  }, []);

  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value);
    if ((event.target.value as string) === "") {
      setExpand(false);
      return;
    }
    let filteredBooks = bookData.filter((dataItem: bookProp) => {
      return check(dataItem, event.target.value as string);
    });
    if (filteredBooks.length > 4) {
      setType("3");
    } else if (filteredBooks.length === 0) {
      setType("1");
    } else {
      setType("2");
    }
    setFilterBooks(filteredBooks);
    setExpand(true);
    dispatch({ type: "SET_SEARCH_TEXT", payload: event.target.value });
  };

  const handleOnClick = () => {
    setExpand(false);
    
    history.push("/search");
  };

  const handleClose =() =>{
    setExpand(false);
  }


  const searchBooks = filterBooks.slice(0, 4).map((book) => {
    return (
      <MenuItem className={classes.menuItem}>
        <SearchResultCard
          id={book.id!}
          authorName={book.author!}
          title={book.title!}
          field={book.category!}
          image={book.bookImage!}
          handleClose ={handleClose}

        />
      </MenuItem>
    );
  });

  const seeResults = (
    <div className={classes.flexRow}>
      <Typography variant="body2" onClick={handleOnClick}>
        See all results
      </Typography>
      <ArrowForwardIosIcon onClick={handleOnClick} className={classes.icon1} />
    </div>
  );

  const noResults = (
    <div className={classes.noResults}>
      <Typography variant="body2">
        No results found. Please try a different search term.

      </Typography>
    </div>
  );

  return (
    <div className={classes.flex}>
      <div className={classes.root}>
        <SearchIcon className={classes.icon} />
        <InputField
          placeholder={placeholder}
          className={className}
          disableUnderline={true}
          data-testid="search-field"
          onChange={onChange}
        />
      </div>

      <div className={classes.searchBooks}>
        {expand && searchBooks}
        {expand && type === "3" && seeResults}
        {expand && type === "1" && noResults}
      </div>
    </div>
  );
};

export default SearchBar;
