import React, {  useState } from "react";
import Header from "../../components/organisms/Header/Header";
import { Button, colors, makeStyles, Typography } from "@material-ui/core";
import { COLORS } from "../../theme/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: "1440px",
  },
  border: {
    width: "189px",
    height: "38px",
    margin: "30px 401px 0 0",
    padding: "7px 27px 7px 30px",
    borderRadius: "4px",
    border: "solid 1px rgba(255, 255, 255, 0)",
    backgroundColor: "blue",
  },
  btn: {
    width: "189px",
    height: "38px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    textTransform:'none',
    // padding:'7px 27px 7px 30px',
    borderRadius: '4px',
    marginTop:theme.spacing(8),
    // paddingLeft:theme.spacing(5)

    // color:'p'
  },
  img: {
    maxWidth: "355px",
    height: "422px",
    objectFit: "contain",
    textAlign: "center",
    marginTop: "160px",
  },
  left: {
    float: "left",
    width: "50%",
    textItems: "center",
    marginTop: "15%",
  },
  right: {
    float: "right",
    width: "50%",
    textAlign: "center",
  },
  subText: {
    fontSize: "22px",
    color: COLORS.CHARCOAL_GREY_100,
    width: "590px",
    height: "78px",
    // margin: 17px 0 30px;
  },
  innerLeft: {
    marginLeft: theme.spacing(18),
  },
  Text: {
    letterSpacing: "1px",
    color: COLORS.CHARCOAL_GREY,
    width: "590px",
    height: "50px",
    margin: "0 0 17px",
  },
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div>
        <div className={classes.left}>
          <div className={classes.innerLeft}>
            <Typography variant="h1" className={classes.Text}>
              Personalized Learning Journeys
            </Typography>
            <Typography variant="h5" className={classes.subText}>
              Learning journeys mapped and recommended based on your grade,
              learning need and speed.
            </Typography>
              <Button className={classes.btn}variant="contained" color="primary">Start your Journey</Button>
          </div>
        </div>
        <div className={classes.right}>
          <img
            src="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/EA66AED7-2617-4E7B-AF4A-C911346A4622.svg"
            className={classes.img}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
