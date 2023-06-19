import React from "react";
import BookStatusCard from "./BookStatusCard";

export default {
  title: "molecules/BookStatusCard",
  component: BookStatusCard,
};

const Template = () => (
  <BookStatusCard
    title="Inorganic Chemistry"
    authorName="Joe Person"
    field="Chemistry"
    image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/B4303A95-C174-4B8B-8F27-D9911CAA7D09.png"
    upCount={16}
    total={100}
    id="1"
  />
);

export const Default = Template.bind({});
