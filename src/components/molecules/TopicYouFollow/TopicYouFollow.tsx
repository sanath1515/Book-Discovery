import { Grid, makeStyles, Typography } from "@material-ui/core";
import theme from "../../../theme/theme";
import TopicsYouFollowSub from "../TopicYouFollowSubject/TopicYouFollowSubject";
import images from "../TopicYouFollowSubject/images";
import { COLORS } from "../../../theme/constants";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";

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
    margin: theme.spacing(3.5, 0, 1, 0),
    color: COLORS.PRIMARY_COLOR_500,
    float: "right",
  },
  icon: {
    color: COLORS.PRIMARY_COLOR_500,
    margin: theme.spacing(5, 0, 1, 1),
    fontSize: "12px",
    float: "right",
  },
  textContainer: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
  },
});

const topicsyoufollow = images.map((topic) => {
  return <TopicsYouFollowSub {...topic} />;
});

const TopicYouFollow: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.textContainer}>
        <Typography variant="h3" className={classes.heading}>
          Topics you follow
        </Typography>
        <ArrowForwardIosIcon className={classes.icon} />
        <Typography variant="subtitle2" className={classes.text}>
          See more{" "}
        </Typography>
      </Grid>
      <Grid className={classes.grid}>{topicsyoufollow}</Grid>
    </div>
  );
};
export default TopicYouFollow;
