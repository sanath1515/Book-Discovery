import React, { useState } from "react";
import RecommendationBookCard from "../RecommendationBookCard/RecommendationBookCard";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { COLORS } from "../../../theme/constants";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import theme from "../../../theme/theme";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { bookProp } from "../../../data/type";

export type RecommendationContainerProps = {
  data: Array<bookProp>;
  className?: string;
  heading?: string;
  subHeading?: string;
  mainHeading?:string;
};
const useStyles = makeStyles({
  heading: {
    width: "475px",
    height: "38px",
    color: COLORS.CHARCOAL_GREY,
    float: "left",
    marginBottom: theme.spacing(0.5)
  },
  mainHeading: {
    width: "475px",
    height: "38px",
    color: COLORS.CHARCOAL_GREY_100,
    float: "left",
    marginBottom: theme.spacing(2.5)
  },
  headingLine:{
    width: "475px",
    height: "38px",
    color: COLORS.CHARCOAL_GREY,
    marginBottom: theme.spacing(1)
  },
  text: {
    width: "68px",
    height: "24px",
    margin: theme.spacing(1, 1, 4, 0),
    color: COLORS.PRIMARY_COLOR_500,
    cursor: "pointer",
    float: "right",
  },
  icon: {
    color: COLORS.PRIMARY_COLOR_500,
    margin: theme.spacing(2.5, 2, 4, 0),
    fontSize: "12px",
    cursor: "pointer",
    float: "right",
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1110px",
  },
  subHeading: {
    color: COLORS.ICON_500,
    float: "left",
  },
});
const RecommendationContainer: React.FC<RecommendationContainerProps> = ({
  data,
  heading,
  subHeading,
  mainHeading
}) => {
  const classes = useStyles();
  const [range, setRange] = useState({ low: 0, high: 4 });
  const [text, setText] = useState("See more");
  const [iconMark, setIconMark] = useState(true);

  const handleOnClick = () => {
    console.log(range.low + " " + range.high);
    if (range.high == data.length) {
      let low = 0;
      let high = 4;
      setText("See More");
      setIconMark(true);
      setRange({ low, high });
    } else {
      let low = range.low + 1;
      let high = range.high + 1;
      setRange({ low, high });
      if (high == data.length) {
        setIconMark(false);
        setText("Go Back");
      }
    }
  };
  const recommendationCards = data
    .slice(range.low, range.high)
    .map((dataItem) => {
      return (
        <RecommendationBookCard
          id={dataItem.id!}
          authorName={dataItem.author!}
          title={dataItem.title!}
          image={dataItem.bookImage!}
        />
      );
    });
  const Heading = (
    <Grid>
      <Typography variant="h3" className={classes.headingLine}>
        {heading}
      </Typography>
    </Grid>
  );
  return (
    <div>
      {heading && subHeading && Heading}
      <Grid>
        {!subHeading && (
          <Typography variant="h3" className={mainHeading?classes.mainHeading:classes.heading}>
            {mainHeading?mainHeading:heading}
          </Typography>
        )}
        <Typography variant="h5" className={classes.subHeading}>
          {subHeading}
        </Typography>
        {iconMark && (
          <ArrowForwardIosIcon
            className={classes.icon}
            onClick={handleOnClick}
            data-testid="seemore"
          />
        )}

        {!iconMark && (
          <ArrowBackIosIcon className={classes.icon} onClick={handleOnClick} />
        )}
        <Typography
          variant="subtitle2"
          className={classes.text}
          onClick={handleOnClick}
          data-testid="seeless"
        >
          {text}
        </Typography>
      </Grid>
      <Grid className={classes.grid}>{recommendationCards}</Grid>
    </div>
  );
};

export default RecommendationContainer;
