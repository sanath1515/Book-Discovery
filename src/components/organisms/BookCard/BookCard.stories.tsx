import React from "react";
import BookCard from "./BookCard";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
};

const Template = () => (
  <BookCard
    title="Nature Chemistry"
    desc="Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons"
    authorName="J D Lee"
    image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
  />
);

export const Default = Template.bind({});
