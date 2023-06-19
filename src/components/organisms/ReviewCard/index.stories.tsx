import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import ReviewCard, {ReviewCardProps} from "."

const ReviewCardStory = {
    title: "Organisms/ReviewCard",
    component: ReviewCard,
}


const Template: Story<ComponentProps<typeof ReviewCard>> = (args:ReviewCardProps) => <ReviewCard {...args} />

export const Review = Template.bind({});

Review.args = {
        id:1,
        image:"https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/8D1CA0C4-4BED-4616-A2B3-28DC74375748.png",
        name:"Keerthi kumar",
        children:[],
}

export default ReviewCardStory;