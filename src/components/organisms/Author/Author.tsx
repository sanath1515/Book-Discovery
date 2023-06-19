import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import theme from "../../../theme/theme";
import { COLORS } from "../../../theme/constants";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  root: {
    width: "729px",
    marginTop: theme.spacing(7),
    border: "solid 1px",
    borderColor: COLORS.GREY_300,
    paddingRight: theme.spacing(3),
    margin: theme.spacing(7, 0, 7, 0),
  },
  card: {
    width: 219,
    height: 128,
    borderRadius: "unset",
    border: 0,
  },
  cards: {
    justifyContent: "space-between",
  },
  subject: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing(1),
  },
  innerGrid: {
    display: "grid",
    rowGap: "5px",
  },
  title: {
    //title
    fontSize: "14px",
    width: "128px",
    textAlign: "left",
    color: COLORS.CHARCOAL_GREY,
  },
  text: {
    marginLeft: theme.spacing(14),
    color: COLORS.CHARCOAL_GREY,
  },
  avatar: {
    height: "75px",
    width: "60px",
  },
  name: {
    fontSize: theme.spacing(3),
    color: COLORS.CHARCOAL_GREY,
    width: "55px",
    height: "18px",
  },
  constants: {
    color: COLORS.ICON_500,
  },
  authorButton: {
    width: "120px",
    height: "30px",
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 500,
  },
  root1: {
    width: "729px",
    borderTop: "1px solid",
    borderColor: COLORS.GREY_300,
    marginBottom: theme.spacing(-2),
  },
  authorImg: {
    width: "80px",
    height: "80px",
    margin: "18px 12px 26px 18px",
  },
  authorName: {
    width: "170px",
    height: "30px",
    color: COLORS.CHARCOAL_GREY,
  },
  authorFollowers: {
    width: "98px",
    height: "22px",
    color: COLORS.CHARCOAL_GREY_100,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  authorDescription: {
    width: "438px",
    height: "66px",
    margin: "18px 2px 40px",
    color: COLORS.CHARCOAL_GREY,
  },
  author: {
    flexBasis: 0,
    marginTop: theme.spacing(3.5),
    marginLeft: theme.spacing(-2)
  },
  text1: {
    width: "68px",
    height: "24px",
    margin: theme.spacing(6.5, -1, 1, 44),
    color: COLORS.PRIMARY_COLOR_500,
  },
  icon: {
    color: COLORS.PRIMARY_COLOR_500,
    margin: theme.spacing(6.25, 0, 1, 0),
    fontSize: "12px",
  },
  div2: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    width: "450px",
    height: "22px",
    fontSize: "14px",
    margin: theme.spacing(6, 3, 1, 4),
    color: COLORS.CHARCOAL_GREY_100,
  },
  aboutAuthor: {
    width: "107px",
    height: "28px",
    margin: "11px 130px 4px 18px",
    color: COLORS.CHARCOAL_GREY_100,
  },
});

export type Image = {
  image: string;
};

export type BatchmatesProps = {
  booksSrc: Array<Image>;
  className?: string;
  authorName: string;
  authorImage: string;
};

const CONSTANTS = {
  BOOKTITLE: "Inorganic Chemistry",
  BY: "by",
  FIELD: "Field",
  AUTHORFIELD: "Chemistry",
  RATING: "4.0",
};

const AuthorItem: React.FC<BatchmatesProps> = ({
  booksSrc,
  authorName,
  authorImage,
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid>
        <Typography
          variant="body2"
          className={classes.aboutAuthor}
          children="About Author"
        />
      </Grid>

      <Grid container direction="row" className={classes.root1}>
        <Grid item xs={2}>
          {" "}
          <Avatar src={authorImage} className={classes.authorImg} />
        </Grid>
        <Grid item xs={3} direction="column" className={classes.author}>
          <Typography variant="h4" className={classes.authorName}>
            {authorName}{" "}
          </Typography>
          <Typography
            variant="body2"
            className={classes.authorFollowers}
            children="30 Followers"
          />
          <Button
            color="primary"
            variant="outlined"
            className={classes.authorButton}
          >
            Following
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Typography
            variant="body2"
            className={classes.authorDescription}
            children="Peter was the 2016 recipient of the American Chemical Society's  Grady
            Stack Award for science journalism.Julio de Paula is Professor of Chemistry, Lewis & Clark College."
          />
        </Grid>
      </Grid>

      <Grid className={classes.div2}>
        <Typography variant="h3" className={classes.heading}>
          Books By Joe Pearson
        </Typography>
        <Typography variant="body2" className={classes.text1}>
          See more
        </Typography>
        <ArrowForwardIosIcon className={classes.icon} />
      </Grid>

      <Grid container item xs={12} direction="row" className={classes.cards}>
        {booksSrc.map((book, index) => {
          return (
            <Card className={classes.card} key={index} variant="outlined">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      src={book.image}
                      className={classes.avatar}
                      variant="square"
                    />
                  </Grid>
                  <Grid item xs={6} className={classes.innerGrid}>
                    <Grid>
                      <Typography
                        className={classes.title}
                        children={CONSTANTS.BOOKTITLE}
                      />
                    </Grid>
                    <Grid container spacing={9}>
                      <Grid item xs={3}>
                        <Rating size="small" defaultValue={4} readOnly />
                      </Grid>
                      <Grid item xs={1} className={classes.text}>
                        <Typography children={CONSTANTS.RATING} />
                      </Grid>
                    </Grid>
                    <Grid className={classes.subject}>
                      <Typography
                        variant="caption"
                        className={classes.constants}
                        children={CONSTANTS.FIELD}
                      />
                      <Typography
                        className={classes.name}
                        children={CONSTANTS.AUTHORFIELD}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default AuthorItem;
