import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActions, Typography } from "@material-ui/core";
import { COLORS } from "../../../theme/constants";
import theme from "../../../theme/theme";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "255px",
    height: "108px",
    padding: theme.spacing(2, 0, 2, 1),
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: COLORS.GREY_300,
  },
  image: {
    width: "80px",
    height: "105px",
    margin: theme.spacing(1),
    objectFit: "fill",
  },
  title: {
    width: "152px",
    height: "22px",
    color: COLORS.CHARCOAL_GREY,
    textAlign: "left",
    paddingLeft: theme.spacing(1),
  },
  author: {
    width: "20px",
    height: "18px",
    color: COLORS.ICON_500,
    paddingLeft: theme.spacing(0.5),
  },
  authorName: {
    width: "160px",
    height: "22px",
    paddingTop: theme.spacing(1.5),
    color: COLORS.CHARCOAL_GREY,
    textAlign: "left",
  },
  field: {
    width: "55px",
    height: "18px",
    textTransform: "none",
    color: COLORS.ICON_500,
  },
  fieldName: {
    width: "64px",
    height: "22px",
    textTransform: "none",
    color: COLORS.CHARCOAL_GREY,
    textAlign: "left",
  },
  pages: {
    width: "auto",
    height: "18px",
    textTransform: "none",
    color: COLORS.CHARCOAL_GREY_100,
  },
  actions: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(0, 0.5),
  },
  actionArea: {
    display: "flex",
    width: "auto",
  },
  content: {
    padding: theme.spacing(0),
  },
});
export type BookStatusCardProps = {
  id: string;
  title: string;
  authorName: string;
  field: string;
  image: string;
  upCount?: number;
  total?: number;
};
const BookStatusCard: React.FC<BookStatusCardProps> = ({
  id,
  title,
  field,
  authorName,
  image,
  upCount,
  total,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (bookId: string) => {
    dispatch({ type: "SET_SINGLE_VIEW_ID", payload: bookId });
    history.push("/bookdetail");
  };
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.image}
          component="img"
          image={image}
          onClick={() => handleClick(id)}
          data-testid="card"
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="subtitle1">
            {title}
          </Typography>
          <CardActions className={classes.actions}>
            <Typography className={classes.author} variant="body2">
              by
            </Typography>
            <Typography className={classes.authorName} variant="body2">
              {authorName}
            </Typography>
          </CardActions>
          <CardActions className={classes.actions}>
            <Typography className={classes.field} variant="overline">
              Category:
            </Typography>
            <Typography className={classes.fieldName} variant="body2">
              {field}
            </Typography>
          </CardActions>
          <CardActions className={classes.actions}>
            <Typography className={classes.pages} variant="overline">
              {upCount} left / {total} pages
            </Typography>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookStatusCard;
