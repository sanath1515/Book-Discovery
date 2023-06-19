import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, makeStyles } from "@material-ui/core";
import { COLORS } from "../../../theme/constants";

const useStyles = makeStyles((theme) => ({
  Rectangle: {
    width: "175px",
    objectFit: "fill",
  },
  Subject: {
    fontWeight: "normal",
    color: COLORS.CHARCOAL_GREY_100,
    marginLeft: theme.spacing(10.5),
  },
}));

export type TopicsYouFollowSubProps = {
  imgSrc?: string;
  subjectName?: string;
};

const TopicsYouFollowSub: React.FC<TopicsYouFollowSubProps> = ({
  imgSrc,
  subjectName,
}) => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid>
        <img src={imgSrc} className={classes.Rectangle} />
      </Grid>
      <Grid>
        <Typography
          variant="h6"
          children={subjectName}
          className={classes.Subject}
        />
      </Grid>
    </Grid>
  );
};

export default TopicsYouFollowSub;
