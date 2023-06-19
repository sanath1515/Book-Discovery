import React from "react";
import {Button as MuiButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
  root: {
    width: 'auto',
    height: '38px',
    padding: theme.spacing(1,3),
    borderRadius: '4px',
    textTransform: "none",
    boxShadow: "none",
  }
}))
  
export type ButtonProps={
  name: string;
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
  variant?: "contained"|"outlined"|"text";
  color?: "primary"|"secondary"|"inherit"|"default";
  className?:string;
}

const Button: React.FC<ButtonProps> = ({ 
    name,
    onClick, 
    color,
    children,
    variant,
  }) => { 
  const classes = useStyles();
  return (
    <MuiButton className={classes.root} variant={variant} color={color} onClick={onClick} disableFocusRipple={true} disableElevation={true} >
     <Typography variant="body1" >{name}</Typography>
    </MuiButton>
  );
}

Button.defaultProps = {
  variant: "contained",
};

export default Button;