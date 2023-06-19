import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import DropDown, { DropDownProps } from "./Dropdown";

const DropDownStory = {
	title: "Molecules/DropDown",
	component: DropDown,
};

const Template: Story<ComponentProps<typeof DropDown>> = (
	args: DropDownProps
) => {
	return <DropDown {...args} />;
};

export const Dropdown = Template.bind({});
Dropdown.args = {
	selectedId: "1",
	items: [
		{
			id: "1",
			name: "Physics",
		},
		{
			id: "2",
			name: "Chemistry",
		},
		{
			id: "3",
			name: "Biology",
		},
	],
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
	selectedId: "2",
	items: [
		{
			id: "1",
			name: "None",
		},
		{
			id: "2",
			name: "a-z",
		},
		{
			id: "3",
			name: "z-a",
		},
	],
};

export default DropDownStory;
