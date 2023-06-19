import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "../../atoms/Avatar";
import theme from "../../../theme/theme";
import { COLORS } from "../../../theme/constants";

const useStyles = makeStyles({
  root: {
    width: 600,
    boxShadow: "none",
    border: "none",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    color: COLORS.ICON_500,
    fontSize: "small",
    marginLeft: theme.spacing(4),
  },
  text: {
    textAlign: "justify",
    marginTop: theme.spacing(2),
    color: COLORS.GREY,
    width: 578,
    fontWeight: theme.typography.h5.fontWeight,
  },
  size: {
    width: 28,
    height: 28,
  },
});

export type CommentCardProps = {
  comment: string;
};

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid container>
            <Grid item xs={1}>
              <Avatar
                src="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/8911A6F3-BE2F-4473-B410-40CA75BF34C6.png"
                className={classes.size}
              ></Avatar>
            </Grid>
            <Grid className={classes.header} item>
              <Typography variant="subtitle2">J.KDEFFF</Typography>
              <Typography
                className={classes.subtitle}
                children="1 second ago"
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid>
              <Grid>
                <Typography children={comment} className={classes.text} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CommentCard;