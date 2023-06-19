import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination as MuiPaginationBox } from "@material-ui/lab";
import { COLORS } from "../../../theme/constants";

export type PaginationProps = {
	booksPerPage: number;
	totalBooks: number;
	getPage: (number: number) => any;
	page: number;
	onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

const useStyles = makeStyles(theme => ({
	root: {
		border: "1px solid",
		borderColor: COLORS.GREY_300,
		borderRadius: "4px",
		width: "fit-content",
		"& .MuiPaginationItem-root": {
			margin: theme.spacing(0),
			border: "0",
		},
		"& .MuiPaginationItem-outlinedPrimary.Mui-selected": {
			backgroundColor: theme.palette.primary.main,
			color: "white",
		},
	},
}));

const Pagination: React.FC<PaginationProps> = ({
	booksPerPage,
	totalBooks,
	getPage,
	page,
	onChange,
}) => {
	var noOfPages = 0;

	for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
		noOfPages++;
	}
	const classes = useStyles();
	console.log("Pagein", page);
	return (
		<MuiPaginationBox
			count={noOfPages}
			page={page}
			variant="outlined"
			shape="rounded"
			className={classes.root}
			color="primary"
			onChange={onChange}
		/>
	);
};

export default Pagination;
