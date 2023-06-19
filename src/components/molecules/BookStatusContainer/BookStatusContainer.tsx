import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import BookStatusCard from "../BookStatusCard/BookStatusCard";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { COLORS } from "../../../theme/constants";
import theme from "../../../theme/theme";
import { bookProp } from "../../../data/type";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  heading: {
    width: "475px",
    height: "38px",
    color: COLORS.CHARCOAL_GREY,
    float: "left",
  },
  text: {
    width: "68px",
    height: "24px",
    margin: theme.spacing(3, 1, 1, 0),
    color: COLORS.PRIMARY_COLOR_500,
    float: "right",
  },
  icon: {
    color: COLORS.PRIMARY_COLOR_500,
    margin: theme.spacing(4.5, 0, 1, 0),
    fontSize: "12px",
    float: "right",
  },
  textContainer: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  textContainer1: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export type BookStatusContainerProps = {
  data: Array<bookProp>;
};
const BookStatusContainer: React.FC<BookStatusContainerProps> = ({ data }) => {
  const allBookStatusCards = data.map((statusCard) => (
    <BookStatusCard
      image={statusCard.bookImage!}
      authorName={statusCard.author!}
      upCount={statusCard.pagesLeft}
      total={statusCard.totalPages}
      id={statusCard.id!}
      title={statusCard.title!}
      field={statusCard.category!}
    />
  ));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.textContainer}>
        <Typography variant="h3" className={classes.heading}>
          Books you are reading
        </Typography>
        <ArrowForwardIosIcon className={classes.icon} />
        <Typography variant="subtitle2" className={classes.text}>
          See more{" "}
        </Typography>
      </Grid>
      <Grid className={classes.textContainer1}>{allBookStatusCards}</Grid>
    </div>
  );
};

export default BookStatusContainer;
