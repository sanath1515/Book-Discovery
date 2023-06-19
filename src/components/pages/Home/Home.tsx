import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header/Header";
import BookDiscover from "../../molecules/DiscoverBooks/BookDiscover";
import UserStatsComplete from "../../molecules/UserStatsComplete/UserStatsComplete";
import TopicYouFollow from "../../molecules/TopicYouFollow/TopicYouFollow";
import { makeStyles } from "@material-ui/core";
import RecommendationContainer from "../../organisms/RecommendationContainer/RecommendationContainer";
import BookStatusContainer from "../../molecules/BookStatusContainer/BookStatusContainer";
import { bookProp } from "../../../data/type";
import {getAllBooks} from "../ApiProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: "1440px",
  },
  subRoot: {
    margin: "auto",
    maxWidth: "1110px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-evenly",
    minHeight: "2400px",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const [allBooks, setAllBooks] = useState<bookProp[]>([]);

  useEffect(() => {
    getAllBooks((res:bookProp[])=>{setAllBooks(res)});
  }, []);

  
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.subRoot}>
        <BookDiscover />
        <UserStatsComplete />
        <BookStatusContainer data={allBooks.slice(0, 4)} />
        <RecommendationContainer
          heading="Recommendations"
          subHeading="Based on your search history"
          data={allBooks.slice(0, 7)}
        />
        <RecommendationContainer
          subHeading="People you are following also read"
          data={allBooks.slice(0, 7)}
        />
        <TopicYouFollow />
        <RecommendationContainer
          heading="Top ratings"
          data={allBooks.slice(0, 7)}
        />
      </div>
    </div>
  );
};

export default Home;
