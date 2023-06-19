import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Rating from "@material-ui/lab/Rating";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { CardActions, Grid, Typography } from "@material-ui/core";
import { COLORS } from "../../../theme/constants";
import Avatar from "../../atoms/Avatar";
import theme from "../../../theme/theme";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "530px",
    height: "255px",
    padding: theme.spacing(5, 2, 4, 3),
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: COLORS.GREY_300,
		"& .MuiPaper-elevation1":{
			boxShadow: "none"
		}
  },
  image: {
    width: "180px",
    height: "250px",
    margin: theme.spacing(0, 1),
    borderRadius: "4px",
    objectFit: "initial",
    cursor :"pointer"
  },
  title: {
    width: "304px",
    height: "30px",
    margin: theme.spacing(0, 1.2),
    color: COLORS.CHARCOAL_GREY,
  },
  desc: {
    width: "290px",
    height: "66px",
    margin: theme.spacing(2),
    color: COLORS.CHARCOAL_GREY_100,
    lineHeight: "22px",
  },
  avatar: {
    width: "38px",
    height: "38px",
    margin: theme.spacing(2, 2),
  },
  author: {
    width: "36px",
    height: "18px",
    textTransform: "none",
    color: COLORS.ICON_500,
    margin:theme.spacing(2,0)
  },
  authorName: {
    width: "auto",
    height: "24px",
    color: COLORS.CHARCOAL_GREY,
  },
  star: {
    width: "20px",
    height: "22px",
    margin: theme.spacing(1.5, 1),
    color: COLORS.CHARCOAL_GREY,
  },
  rating: {
    width: "98px",
    height: "22px",
    padding: theme.spacing(2, 0),
    color: COLORS.CHARCOAL_GREY,
  },
  bookmark: {
    color: COLORS.PRIMARY_COLOR_500,
    paddingRight: "20px",
    cursor: "pointer"
  },
  bookmarkBorder: {
    color: COLORS.ICON_500,
    paddingRight: "20px",
    cursor: "pointer"
  },
  reply: {
    color: COLORS.GREY_500,
    paddingRight: "20px",
  },
  playlist: {
    color: COLORS.GREY_500,
  },
  action: {
    display: "flex",
    width: "auto",
    padding : theme.spacing(0)
  },
  content: {
    padding: theme.spacing(0),
  },
  author1: {
    marginTop: theme.spacing(1.2),
  },
});
export type BookCardProps = {
  id: string;
  title: string;
  desc: string;
  authorName: string;
  image: string;
  authorImg:string;
};
const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  desc,
  authorName,
  image,
  authorImg
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (bookId: string) => {
    dispatch({ type: "SET_SINGLE_VIEW_ID", payload: bookId });
    history.push("/bookdetail");
  };
  const classes = useStyles();
  const [bookMark, setBookMark] = useState(false);
  const onBookmarkClick = () => {
    setBookMark(!bookMark);
  };
  return (
    <Card className={classes.root}>
      <CardContent className={classes.action}>
        <CardMedia
          className={classes.image}
          component="img"
          image={image}
          onClick={()=>handleClick(id)} data-testid="card"/>
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography className={classes.desc} variant="body2">
            {desc}
          </Typography>
          <Grid direction="row" container>
            <Grid item>
              <Avatar className={classes.avatar} src={authorImg} />
            </Grid>
            <Grid item className={classes.author1}>
              <Typography className={classes.author} variant="overline">
                Author
              </Typography>
              <Typography className={classes.authorName} variant="subtitle2">
                {authorName}
              </Typography>
            </Grid>
          </Grid>
          <CardActions>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography className={classes.star} variant="body1">
              4.5
            </Typography>
            <Typography className={classes.rating} variant="body2">
              ( 1,204 ratings )
            </Typography>
          </CardActions>
        
      <CardActions>
        {bookMark && (
          <BookmarkIcon
            className={classes.bookmark}
            onClick={onBookmarkClick}
            data-testid="bookmark"
          />
        )}
        {!bookMark && (
          <BookmarkBorderIcon
            className={classes.bookmarkBorder}
            onClick={onBookmarkClick}
            data-testid="bookmark"
          />
        )}
        <ReplySharpIcon className={classes.reply} />
        <PlaylistAddCheckIcon className={classes.playlist} />
      </CardActions>
      </CardContent>
      </CardContent>
    </Card>
  );
};

export default BookCard;
