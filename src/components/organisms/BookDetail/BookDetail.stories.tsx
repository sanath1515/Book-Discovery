import React from "react";
import BookDetail from "./BookDetail";

export default {
  title: "organisms/BookDetail",
  component: BookDetail,
};

const Template = () => (
  <BookDetail
    image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/19709E25-7BBE-4E66-8C4B-E83184539737.png"
    authorName="J D Lee"
    fieldName="Chemistry"
    title="Concise Inorganic Chemistry"
    desc="Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning.Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data.This practical book shows you how.By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks."
    releaseDate="12 sep 1998"
    language="English"
    pagesRead={"100"} totalPages={0}  />
);

export const Default = Template.bind({});
