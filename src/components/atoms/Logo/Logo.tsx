import React from "react";
import { makeStyles } from '@material-ui/core/styles';

export type LogoProps = {}

const useStyles = makeStyles({
  root: {
    width: '35px',
    height: '24px',
    objectFit: "contain",
    margin: '7px 17px 7px 0'
  }
});


const Logo: React.FC<LogoProps> = () => {
  const classes = useStyles();
  return (
    <img className={classes.root} src="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/1515BA80-801B-4E2F-9576-01A4265C0E6A.svg" />
  );
}

export default Logo;
