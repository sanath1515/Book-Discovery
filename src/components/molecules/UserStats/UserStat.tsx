import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { COLORS } from "../../../theme/constants";
import theme from "../../../theme/theme";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "255px",
    height: "120px",
    border: "2px solid",
    borderColor: COLORS.GREY_300,
    boxShadow: "none",
  },
  title: {
    fontSize: 10,
    textAlign: "left",
  },
  pos: {
    marginBottom: theme.spacing(3),
  },
  display: {
    color: COLORS.CHARCOAL_GREY,
    marginLeft: theme.spacing(11.5),
    padiingLeft: theme.spacing(4),
  },
  font: {
    width: "156px",
    color: COLORS.CHARCOAL_GREY_100,
  },
  image: {
    width: "33px",
    objectFit: "contain",
  },
  cardContent: {
    paddingTop: theme.spacing(1),
    boxShadow: "none",
  },
});
export type UserStatProps = {
  name: string;
  count: number;
  img: any;
};
const UserStatItem: React.FC<UserStatProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <CardActions>
          <img src={props.img} />
          <Typography variant="body2" className={classes.font}>
            {props.name}
          </Typography>
        </CardActions>
        <Typography variant="h2" className={classes.display}>
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default UserStatItem;
