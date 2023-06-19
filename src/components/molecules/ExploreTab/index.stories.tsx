import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import ExploreTab,{ExploreTabProps} from ".";
import {items} from "./constants";

const ExploreTabStory={
    title:"Molecules/ExploreTab",
    component:ExploreTab,
};

const Template: Story<ComponentProps<typeof ExploreTab>>=(args:ExploreTabProps)=>
    <ExploreTab {...args} />;

export const ExploreCategories = Template.bind({});
ExploreCategories.args={
    items : items,
    getExploreCategory:action('selected category'),
    handleClose:action('Clicked close icon')
};

export default ExploreTabStory;