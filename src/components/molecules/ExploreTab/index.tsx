import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, ListItemText } from "@material-ui/core";
import theme from "../../../theme/theme";
import CloseIcon from "@material-ui/icons/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalculator,  faGlobe,  faFlask,  faCommentAlt,  faRunning,  faBook,  faHeadSideVirus,  faBookOpen,} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../../theme/constants";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth:"1120px",
    maxHeight:"700px",
    border: `${theme.spacing(0.125)}px solid ${theme.palette.grey[300]}`,
  },
  topnav: {
    height: "56px",
    borderBottom: `${theme.spacing(0.75)}px solid ${theme.palette.grey[300]}`,
  },
  grid: {
    width: "100%",
    height: "670px",
    backgroundColor: COLORS.GREY_200,
  },
  closeIcon: {
    cursor:"pointer",
    marginLeft:"auto",
    marginRight:theme.spacing(25)
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(2),
  },
  innerGrid: {
    margin: 80,
    marginTop: theme.spacing(5),
    paddingTop:0
  },
  text: {
    marginTop: theme.spacing(3.75),
    marginLeft: theme.spacing(16.5),
  },
  icon: {
    fontSize: theme.typography.h6.fontSize,
  },
  category: {
    width: "fit-content",
    height: "24px",
    fontFamily: theme.typography.h3.fontFamily,
    color: COLORS.CHARCOAL_GREY,
    fontSize: theme.typography.subtitle1.fontSize,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: theme.typography.subtitle1.lineHeight,
    letterSpacing: "normal",
    fontWeight: theme.typography.h5.fontWeight,
  },
  button: {
    textTransform: "none",
    fontFamily: theme.typography.subtitle2.fontFamily,
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.h5.fontWeight,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    width: 'max-content',
    color: COLORS.CHARCOAL_GREY,
    marginBottom: theme.spacing(-2),
  },
  body: {
    marginBottom: theme.spacing(4),
  },
  topic: {
    color: COLORS.PRIMARY_COLOR_500,
    fontWeight: theme.typography.h5.fontWeight,
  },
  topics: {
    color: COLORS.CHARCOAL_GREY,
    fontWeight: theme.typography.h5.fontWeight,
  }
}));

export type Category = {
  category: string;
  topics: Array<string>;
};

export type ExploreTabProps = {
  items: Array<Category>;
  getExploreCategory: (category: string) => void;
  handleClose: (open: boolean) => void;
};

var icons = [  faCommentAlt,  faCalculator,  faFlask,  faGlobe,  faBookOpen,  faBook,  faRunning,  faHeadSideVirus,];
const ExploreTab: React.FC<ExploreTabProps> = ({
  items,
  getExploreCategory,
  handleClose,
}) => {
  const classes = useStyles();
  const onClose = () => {
    handleClose(false);
  };

  const filterCategory = (category: string) => {
    getExploreCategory(category);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.topnav}>
        <Grid container className={classes.text}>
          <Grid item xs={1}>
            <Typography className={classes.topic} variant="subtitle1">All Topics</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.topics} variant="subtitle1">Authors</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.topics} variant="subtitle1">Recent titles</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.topics} variant="subtitle1">Popular titles</Typography>
          </Grid>
          <Grid item onClick={onClose} className={classes.closeIcon}>
            <CloseIcon data-testid="close" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <Grid container spacing={3} className={classes.innerGrid}>
          {items.map((item: Category, index) => {
            return (
              <Grid item xs={4} className={classes.body} >
                <Grid className={classes.header}>
                  <FontAwesomeIcon
                    icon={icons[index]}
                    className={classes.icon}
                  />
                  <Button className={classes.category} onClick={() => filterCategory(item.category)} >
                    {item.category.toUpperCase()}
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  {item.topics.map((topic, index1) => {
                    return (
                      <ListItemText>
                        <Button
                          className={classes.button}
                          onClick={() => filterCategory(topic)}
                        >
                          {item.topics[index1]}
                        </Button>
                      </ListItemText>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExploreTab;