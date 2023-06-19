import { Grid, makeStyles,Button } from "@material-ui/core"
import theme from "../../../theme/theme"
import React from "react";

const useStyles = makeStyles({

  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    zIndex: -2
  },

  btn: {
    position: 'absolute',
    top: '80%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: ' blue',
    color: 'white',
    fontSize: '16px',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center'
  }

})

const BookDiscover: React.FC = () => {
  const imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/296A1994-087A-4F86-BC94-D8E3D96946EE.png";
  const name="Discover";

  const classes = useStyles()
  return (
    <Grid className={classes.container}>
      <img src={imgSrc} alt="Snow" />
      <Button className={classes.btn} > {name}</Button>
    </Grid>
    
  )
}

export default BookDiscover