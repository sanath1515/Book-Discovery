import React from "react";
import Button from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "Discover",
  color: "primary",
  variant: "contained",
};