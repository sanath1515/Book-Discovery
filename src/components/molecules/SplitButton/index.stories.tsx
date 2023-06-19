import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import SplitButton, { SplitButtonProps } from ".";

const SplitButtonStory = {
	title: "Molecules/SplitButton",
	component: SplitButton,
};

const Template: Story<ComponentProps<typeof SplitButton>> = (
	args: SplitButtonProps
) => <SplitButton {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
	selectedId: 1,
	items: ["Start Reading", "Finish Reading"],
};

export default SplitButtonStory;
