import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "../../atoms/Avatar";
import Rating from "@material-ui/lab/Rating";
import theme from "../../../theme/theme";
import { COLORS } from "../../../theme/constants";
import { data, CONSTANTS } from "./constants";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    width: 225,
    height: 206,
    boxShadow: "none",
    display:'grid',
    margin: theme.spacing(9,0,2,0)
  },
  cardroot: {
    width: 225,
    height: 126,
    boxShadow: "none",
    display:'grid'
  },
  text: {
    textAlign: "justify",
    width: 201,
    height: 53,
    fontSize: theme.typography.caption.fontSize,
    color: COLORS.GREY,
    marginLeft: theme.spacing(3),
    fontFamily:theme.typography.subtitle2.fontFamily,
    fontWeight:theme.typography.h5.fontWeight,
  },
  avatar: {
    margin: theme.spacing(2, 2, 2, 3),
  },
  size: {
    width: 28,
    height: 28,
  },
  name: {
    marginTop: theme.spacing(3),
    fontSize: theme.typography.subtitle1.fontSize,
    color: COLORS.GREY,
    width:'fit-content'
  },
  subHeader: {
    margin: theme.spacing(-5,0,0,33),
    fontSize: theme.typography.caption.fontSize,
    color: COLORS.ICON_500,
    fontWeight:theme.typography.h5.fontWeight,
  },
  rating: {
    fontSize: theme.typography.body1.fontSize,
    marginLeft: theme.spacing(3),
  },
  number: {
    marginLeft: theme.spacing(9),
    fontSize: theme.typography.caption.fontSize,
    color: COLORS.CHARCOAL_GREY,
    fontWeight:theme.typography.h5.fontWeight,
  },
  list: {
    width: 730,
    height: 270,
    display: "flex",
    columnGap: theme.spacing(6.75),
  },
  title: {
    display:'flex',
    fontSize: theme.typography.h3.fontSize,
    color: COLORS.GREY,
    margin: theme.spacing(0, 0, 4, 0),
  },
  read:{
    borderRadius:'unset',
    display:'flex',
    color:theme.palette.primary.main,
     marginTop:theme.spacing(-11.5),
  },
  typography1:{
     marginLeft:'auto',
  }
});

export type StudentReviewProps = {
  name?: string;
  image?: string;
  className?: string;
};

const StudentReview: React.FC<StudentReviewProps> = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography className={classes.title} children="Reviews of people you are following" />
      <Grid className={classes.read}>
      <Typography className={classes.typography1} variant="subtitle2" children="Read all" />
      <KeyboardArrowRightIcon />
      </Grid>
      <Grid className={classes.list}>
        {data.map((item) => {
          return (
            <Card className={classes.cardroot}>
              <Grid container spacing={0}>
                <Grid item className={classes.avatar}>
                  <Avatar className={classes.size} src={item.image}></Avatar>
                </Grid>
                <Grid item>
                  <Grid>
                    <Grid>
                      <Typography
                        className={classes.name}
                        children={item.name}
                      ></Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.subHeader}
                        children={CONSTANTS.STUDENT}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Rating className={classes.rating} defaultValue={4} readOnly />
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    className={classes.number}
                    children={CONSTANTS.RATING}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Typography
                    className={classes.text}
                    children={CONSTANTS.COMMENT}
                  />
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default StudentReview;