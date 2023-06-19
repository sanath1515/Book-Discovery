import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BookDetail from "../../organisms/BookDetail/BookDetail";
import Header from "../../organisms/Header/Header";
import Batchmates from "../../organisms/Batchmates";
import { Grid } from "@material-ui/core";
import AuthorItem from "../../organisms/Author/Author";
import StudentReview from "../../organisms/ReviewCardMock";
import ReviewCard from "../../organisms/ReviewCard";
import RecommendationContainer from "../../organisms/RecommendationContainer/RecommendationContainer";
import theme from "../../../theme/theme";
import {
  batchmateBooks,
  authorBooks,
  reviewCardData,
  defaultData,
} from "./constants";
import { useSelector } from "react-redux";
import { bookState } from "../../../store/reducers";
import { bookProp } from "../../../data/type";

const useStyles = makeStyles({
  main: {
    margin: "auto",
    width: "100%",
    maxWidth: "1440px",
  },
  submain: {
    margin: "auto",
    width: "100%",
    maxWidth: "1110px",
    justifyContent: "space-between",
  },
  container: {
    marginLeft: theme.spacing(7),
  },
  bookDetail: {
    margin: theme.spacing(7, 0, 7, 0),
  },
  batchmates: {
    margin: theme.spacing(7, 0, 3, 0),
  },
  wrap: {
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
});

export type SingleDetailViewProps = {
  id?: string;
};
const SingleDetailView: React.FC<SingleDetailViewProps> = (props) => {
  const classes = useStyles();

  const singleViewIdStore = useSelector<bookState, bookState["singleViewId"]>(
    (state) => state.singleViewId
  );

  const [allBooks, setAllBooks] = useState<bookProp[]>([]);
  const [book, setBook] = useState<bookProp>(defaultData);

  useEffect(() => {
    getBook(singleViewIdStore);
    getAllBooks();
  }, [singleViewIdStore]);

  const getBook = async (id: string) => {
    await fetch("http://localhost:3000/books/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBook(data);
      });
  };

  const getAllBooks = async () => {
    await fetch("http://localhost:3000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllBooks(data);
      });
  };

  const reviewCards = reviewCardData.map((element) => {
    return (
      <ReviewCard image={element.image} name={element.name} children={[]} />
    );
  });
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.submain}>
        <Grid direction="row" container className={classes.wrap}>
          <Grid item className={classes.bookDetail}>
            <BookDetail
              authorName={book!.author!}
              desc={book!.desc!}
              fieldName={book!.category!}
              image={book!.bookImage!}
              language={book!.language!}
              releaseDate={book!.releaseDate!}
              title={book!.title!} pagesRead={book!.pagesRead!} totalPages={book!.totalPages!}            />
          </Grid>
          <Grid item className={classes.batchmates}>
            <Batchmates booksSrc={batchmateBooks} />
          </Grid>
        </Grid>
        <AuthorItem
          authorName={book!.author!}
          authorImage={book!.authorImage!}
          booksSrc={authorBooks}
        />
        <StudentReview />
        <Grid>{reviewCards}</Grid>
        <RecommendationContainer
          mainHeading="Recommendations based on your search"
          data={allBooks.slice(0, 7)}
          className={classes.container}
        />
      </div>
    </div>
  );
};

export default SingleDetailView;
