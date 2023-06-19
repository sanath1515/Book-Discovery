import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import CommentCard, {CommentCardProps} from "."

const CommentCardStory = {
    title: "Organisms/ReviewCard",
    component: CommentCard,
}


const Template: Story<ComponentProps<typeof CommentCard>> = (args:CommentCardProps) => <CommentCard {...args} />

export const Comment = Template.bind({});

Comment.args = { comment:"Still a very nice Book, I got stuck at a place where I thought the problem was overprinting, or rather someone told me it was that. but it as simply just a mistake where I accidentally had set the box object (under effects [Effects panel can be found in the"
}

export default CommentCardStory;