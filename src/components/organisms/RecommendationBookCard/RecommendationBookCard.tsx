import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Rating from "@material-ui/lab/Rating";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";
import { CardActions, TableCell, Typography } from "@material-ui/core";
import { COLORS } from "../../../theme/constants";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAddRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import theme from "../../../theme/theme";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    width: "255px",
    height: "341px",
    padding: theme.spacing(5, 0, 2),
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: COLORS.GREY_300,
  },
  image: {
    width: "180px",
    height: "190px",
    margin: theme.spacing(0, 6, 2, 7),
    objectFit: "contain",
    cursor: "pointer",
  },
  title: {
    width: "216px",
    height: "28px",
    margin: theme.spacing(1, 8),
    color: COLORS.CHARCOAL_GREY,
  },
  author: {
    width: "46px",
    height: "22px",
    textTransform: "none",
    color: COLORS.CHARCOAL_GREY_100,
    marginLeft:theme.spacing(0.75)
  },
  authorName: {
    height: "24px",
    float: "right",
  },
  star: {
    paddingTop: theme.spacing(0.25)
  },
  rating: {
    width: "108px",
    height: "22px",
    margin: theme.spacing(1, 2),
    textTransform: "none",
    textAlign: "left",
    paddingTop:theme.spacing(.75),
  },
  actions: {
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(7),
  },
  titleActions: {
    padding: theme.spacing(0),
  },
  bookmark: {
    color: COLORS.PRIMARY_COLOR_500,
    paddingLeft: theme.spacing(1),
    padding: theme.spacing(2),
    fontSize: "22px",
    cursor: "pointer",
  },
  bookmarkBorder: {
    color: COLORS.ICON_500,
    padding: theme.spacing(2),
    fontSize: "22px",
    cursor: "pointer",
    paddingLeft: theme.spacing(1),
  },
  reply: {
    color: COLORS.GREY_500,
    padding: theme.spacing(1, 2),
    fontSize: "22px",
  },
  playlist: {
    color: COLORS.GREY_500,
    padding: theme.spacing(1, 2),
    fontSize: "22px",
    cursor: "pointer",
  },
  content: {
    padding: theme.spacing(0),
  },
  cell: {
    padding: theme.spacing(1),
    borderBottom: "none",
    width: "20px",
  },
  actionIcons: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(-1),
  },
});

export type RecommendationBookCardProps = {
  id: string;
  title: string;
  authorName: string;
  image: string;
};

const RecommendationBookCard: React.FC<RecommendationBookCardProps> = (
  props
) => {
  const [bookMark, setBookMark] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onBookmarkClick = () => {
    setBookMark(!bookMark);
  };
  const [playlistAdded, setPlaylistAdded] = useState(false);

  const onPlaylistClick = () => {
    setPlaylistAdded((prev) => {
      return !prev;
    });
  };
  const onClick = (id: string) => {
    dispatch({ type: "SET_SINGLE_VIEW_ID", payload: id });
    history.push("/bookdetail");
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <TableCell className={classes.cell}>
        <CardMedia
          className={classes.image}
          component="img"
          image={props.image}
          onClick={() => onClick(props.id)}
          data-testid="card"
        />
      </TableCell>
      <CardContent className={classes.content}>
        <CardActions className={classes.titleActions}>
          <Typography className={classes.title} variant="h6">
            {props.title}
          </Typography>
        </CardActions>
        <CardActions className={classes.actions}>
          <Typography className={classes.author} variant="body2">
            Author
          </Typography>
          <Typography className={classes.authorName} variant="subtitle2">
            {props.authorName}
          </Typography>
        </CardActions>
        <CardActions className={classes.actions}>
          <Rating size="small" read-only value={4} readOnly />
          <Typography className={classes.star} variant="body1">
            4.0
          </Typography>
          <Typography className={classes.rating} variant="overline">
            (1,204 ratings)
          </Typography>
        </CardActions>
      </CardContent>
      <Divider />
      <CardActions className={classes.actionIcons}>
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
        {!playlistAdded && (
          <PlaylistAddIcon
            className={classes.playlist}
            onClick={onPlaylistClick}
            data-testid="playlist"
          />
        )}
        {playlistAdded && (
          <PlaylistAddCheckIcon
            className={classes.playlist}
            onClick={onPlaylistClick}
            data-testid="playlist"
          />
        )}
      </CardActions>
    </Card>
  );
};

export default RecommendationBookCard;
