import React from "react";
import {Story} from "@storybook/react";
import StudentReview from "."

const ReviewCardStory = {
    title: "Organisms/StudentReview",
    component: StudentReview,
}


const Template: Story = () => <StudentReview  />

export const StudentReviewCard = Template.bind({});

export default ReviewCardStory;