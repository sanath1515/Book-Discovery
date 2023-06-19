import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import theme from "../../../theme/theme";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { COLORS } from "../../../theme/constants";
const useStyles = makeStyles({
  index: {
    zIndex: -1,
  },
  root: {
    width: 350,
    height: 128,
    borderRadius: "unset",
  },
  subject: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing(1.5),
    fontWeight: theme.typography.h2.fontWeight,
    color: COLORS.CHARCOAL_GREY,
  },
  innerGrid: {
    display: "grid",
    rowGap: "5px",
  },
  header: {
    width: 350,
    height: 50,
    borderRadius: "unset",
    textAlign: "center",
    justifyContent: "center",
  },
  header1: {
    width: 350,
    height: 50,
    borderRadius: "unset",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: theme.palette.primary.main,
  },
  bullet: {
    display: "inline-block",
    margin: theme.spacing(0, 0.5),
    transform: "scale(0.8)",
  },
  title: {
    fontSize: theme.typography.body1.fontSize,
  },
  pos: {
    marginBottom: theme.spacing(3),
  },
  text: {
    marginLeft: theme.spacing(8),
    marginTop: theme.spacing(-0.5),
    color: COLORS.CHARCOAL_GREY,
  },
  avatar: {
    height: "104px",
    width: "90px",
  },
  typography: {
    fontSize: theme.typography.h6.fontSize,
    color: COLORS.GREY,
    display: "flex",
    marginLeft: theme.spacing(3.5),
    marginTop: theme.spacing(3),
    fontWeight: theme.typography.h2.fontWeight,
  },
  typography1: {
    fontSize: theme.typography.body2.fontSize,
    display: "flex",
    marginLeft: "auto",
    justifyContent: "flex-end",
    fontWeight: theme.typography.h2.fontWeight,
  },
  footer: {
    marginRight: theme.spacing(7),
  },
  name: {
    fontSize: theme.spacing(3),
    color: COLORS.CHARCOAL_GREY,
    fontWeight: theme.typography.h2.fontWeight,
  },
  constants: {
    color: COLORS.ICON_500,
  },
});

export type Mock = {
  image: string;
};

export type BatchmatesProps = {
  booksSrc: Array<Mock>;
  className?: string;
};

const Batchmates: React.FC<BatchmatesProps> = ({ booksSrc }) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.index}>
      <Grid item xs={12}>
        <Card className={classes.header} variant="outlined">
          <Typography
            className={classes.typography}
            children="Your batchmates also read"
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        {booksSrc.map((book, index) => {
          return (
            <Card className={classes.root} variant="outlined" key={index}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      src={book.image}
                      className={classes.avatar}
                      variant="square"
                    />
                  </Grid>
                  <Grid item xs={8} className={classes.innerGrid}>
                    <Grid item className={classes.subject}>
                      <Typography
                        children="Inorganic chemistry"
                        variant="subtitle2"
                      />
                    </Grid>
                    <Grid className={classes.subject}>
                      <Typography
                        variant="caption"
                        className={classes.constants}
                      >
                        by
                      </Typography>
                      <Typography className={classes.name}>J D Lee</Typography>
                    </Grid>
                    <Grid container spacing={9}>
                      <Grid item xs={3}>
                        <Rating size="small" defaultValue={4} readOnly />
                      </Grid>
                      <Grid item xs={1} className={classes.text}>
                        <Typography variant="subtitle2">4.0</Typography>
                      </Grid>
                    </Grid>
                    <Grid className={classes.subject}>
                      <Typography
                        variant="caption"
                        className={classes.constants}
                      >
                        Field:
                      </Typography>
                      <Typography className={classes.name}>
                        Chemistry
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
        <Grid item xs={12}>
          <Card className={classes.header1} variant="outlined">
            <Typography className={classes.typography1}>See all</Typography>
            <KeyboardArrowRightIcon className={classes.footer} />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Batchmates;
