import { makeStyles } from "@material-ui/core";
import UserStatItem from "../UserStats/UserStat";
import userStatsData from "./userStatsData";
import React from "react";

const useStyles = makeStyles({
  grid: {
    display: "flex",
    gridGap: "20px",
    borderRadius: "4px",
    justifyContent: "space-between",
    width: "100%",
  },
});

const allUserStats = userStatsData.map((userStat) => {
  return <UserStatItem {...userStat} />;
});

const UserStatsComplete: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.grid}>{allUserStats}</div>;
};

export default UserStatsComplete;
