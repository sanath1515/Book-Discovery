import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActions, CardContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "../../atoms/Avatar";
import Rating from "@material-ui/lab/Rating";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import InputField from "../../atoms/InputField";
import CommentCard from "../CommentCard/index";
import theme from "../../../theme/theme";
import { COLORS } from "../../../theme/constants";
import { CONSTANTS } from "./constants";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const useStyles = makeStyles({
  root: {
    width: "fit-content",
    height: "100%",
    border: "none",
    margin: theme.spacing(1, 0, 1, 0),
  },
  text: {
    textAlign: "justify",
    width: 634,
    color: COLORS.GREY,
    fontFamily: theme.typography.subtitle2.fontFamily,
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: "60px",
    width: "60px",
  },
  innergrid: {
    display: "grid",
    rowGap: theme.spacing(0.75),
  },
  btn: {
    backgroundColor: COLORS.GREY_100,
    color: COLORS.CHARCOAL_GREY,
    width: 91,
    height: 32,
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
    border: `${theme.spacing(0.5)}px solid ${theme.palette.grey[300]}`,
    fontWeight: theme.typography.h5.fontWeight,
  },
  time: {
    marginBottom: theme.spacing(2),
    color: COLORS.ICON_500,
    marginLeft: "auto",
    fontSize: theme.typography.caption.fontSize,
  },

  footer: {
    marginTop: theme.spacing(1.5),
    display: "flex",
    alignItems: "center",
  },
  rating: {
    fontSize: "small",
    fontWeight: theme.typography.h1.fontWeight,
    padding:theme.spacing(1,0)
  },
  subHeader: {
    marginBottom: theme.spacing(2),
    color: COLORS.ICON_500,
    fontWeight: theme.typography.caption.fontWeight,
  },
  header: {
    display: "flex",
    alignItems: "center",
    color: COLORS.CHARCOAL_GREY,
  },
  middlegrid: {
    marginTop: theme.spacing(1),
  },
  title: {
    display: "flex",
    fontSize: theme.typography.h3.fontSize,
    color: COLORS.GREY,
    margin: theme.spacing(0, 0, 4, 0),
  },
  typography1: {
    fontSize: theme.typography.body2.fontSize,
    marginLeft: "auto",
    marginTop: theme.spacing(0.5),
  },
  seemore: {
    borderRadius: "unset",
    display: "flex",
    color: theme.palette.primary.main,
    marginTop: theme.spacing(-5.75),
  },
  like:{
    color:COLORS.ICON_500,
    cursor: "pointer"
  },
  star:{
    padding:theme.spacing(1,0)
  }
});

export type ReviewCardProps = {
  id?: number;
  name: string;
  image: string;
  children: Array<string>;
  className?: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  id,
  name,
  image,
  children,
}) => {
  const classes = useStyles();
  const [like, setLike] = useState(false);
  const [disLike, setDislike] = useState(false);
  const [text, setText] = useState("");
  const [showInput, setInput] = useState(false);
  const [data, setData] = useState<Array<string>>(children);

  const handleLike = () => {
    if (!disLike) {
      setLike(!like);
    } else {
      setLike(!disLike);
    }
  };
  const handleDislike = () => {
    if (!like) {
      setDislike(!disLike);
    } else {
      setLike(!like);
    }
  };

  const handleReply = () => {
    setInput(!showInput);
  };

  const addComment = () => {
    let newData = [...data];
    newData.push(text);
    setData(newData);
    setInput(false);
  };

  return (
    <Card className={classes.root} variant="outlined" key={id}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={image} className={classes.avatar} />
          </Grid>
          <Grid item xs={6} className={classes.innergrid}>
            <Grid className={classes.header}>
              <Typography variant="h6" children={name} />
              <Typography className={classes.time} children={CONSTANTS.TIME} />
            </Grid>
            <Grid>
              <Typography
                variant="caption"
                className={classes.subHeader}
                children={CONSTANTS.PROFESSION}
              />
            </Grid>
            <Grid container spacing={3} className={classes.middlegrid}>
              <Grid item xs={2}>
                <Rating size="small" defaultValue={4} readOnly className={classes.star}/>
              </Grid>
              <Grid item>
                <Typography
                  className={classes.rating}
                  children={CONSTANTS.RATING}
                />
              </Grid>
            </Grid>
            <Grid>
              <Typography
                variant="subtitle2"
                children={CONSTANTS.COMMENT}
                className={classes.text}
              />
              <Grid className={classes.seemore}>
                <Typography
                  className={classes.typography1}
                  children="See more"
                />
                <KeyboardArrowDownIcon />
              </Grid>
            </Grid>
            <Grid container spacing={1} className={classes.footer}>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  onClick={handleReply}
                  className={classes.btn}
                >
                  Reply
                </Button>
              </Grid>
              <Grid item xs={1} onClick={handleLike}>
                {!like ? (
                  <ThumbUpOutlinedIcon data-testid="like" className={classes.like} />
                ) : (
                  <ThumbUpIcon data-testid="like" className={classes.like} />
                )}
              </Grid>
              <Grid item xs={1} onClick={handleDislike}>
              {!disLike ? (
                  <ThumbDownOutlinedIcon data-testid="like" className={classes.like} />
                ) : (
                  <ThumbDownIcon data-testid="like" className={classes.like} />
                )}
              </Grid>
            </Grid>
            <CardActions>
              {showInput && (
                <>
                  <InputField
                    disableUnderline={false}
                    data-testid="input"
                    placeholder="write comment"
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                  />
                  <Button onClick={addComment} className={classes.btn}>
                    Post
                  </Button>
                </>
              )}
            </CardActions>
            {data &&
              data.length > 0 &&
              data.map((child) => {
                return <CommentCard comment={child} />;
              })}
          </Grid>
        </Grid>
        <Divider variant="inset" />
      </CardContent>
    </Card>
  );
};
export default ReviewCard;
