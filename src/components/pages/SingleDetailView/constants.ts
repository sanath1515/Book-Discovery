import { bookProp } from "../../../data/type";

type Image = {
    image: string;
  };
  
const image_1: Image = {
    image:
      "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/843192ED-FF34-4571-B8AA-653DDE8C1434.png",
  };
  const image_2: Image = {
    image:
      "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png",
  };
  const image_3: Image = {
    image:
      "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/1C868AAA-E223-420A-95EE-01A58145DC1A.png",
  };
export const authorBooks: Image[] = [image_1, image_2, image_3];
  
export const batchmateBooks = [
    {
      image:
        "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/A78B8C90-C12E-45B1-9523-2C24CCA913ED.png",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61JPFJpEZxL._SY445_SX342_QL70_ML2_.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/71u9RfUhiPL.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/81OrIk+OffL.jpg",
    },
  ];

  export const reviewCardData=[
      {
        image:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/8D1CA0C4-4BED-4616-A2B3-28DC74375748.png",
        name:"Keerthi kumar"
      },
      {
        image:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/8911A6F3-BE2F-4473-B410-40CA75BF34C6.png",
        name:"Mounavi Ramesh"
      },
      {
        image:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/302EA847-4DEE-4DE2-B8A0-DCC9CE94AA2D.png",
        name:"Pranitha"
      }
  ]

export const defaultData:bookProp=
  {
    "id": "1",
    "title": "Crystal chemistry",
    "author": "Carlos Gonzalez",
    "category": "Chemistry",
    "pagesLeft": 100,
    "totalPages": 200,
    "rating": 5,
    "bookmark": false,
    "addToLibrary": false,
    "language": "English",
    "numberOfRatings": 1200,
    "bookImage": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/E3EEB4FA-4DF1-491D-8A51-DC1C1921FB60.png",
    "authorImage": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/8911A6F3-BE2F-4473-B410-40CA75BF34C6.png",
    "releaseDate": "12 sep 1998",
    "pagesRead": "100",
    "desc": " Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning.Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data.This practical book shows you how.By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks."
  }
