import React from "react";
import RecommendationBookCard from "./RecommendationBookCard";

export default {
  title: "organisms/RecommendationBookCard",
  component: RecommendationBookCard,
};

const Template = () => (
  <RecommendationBookCard
    title="Nature Chemistry"
    authorName="J D Lee"
    image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png"
    id={"1"}
  />
);

export const Default = Template.bind({});
