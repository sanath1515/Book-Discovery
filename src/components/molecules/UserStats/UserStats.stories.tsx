import React, { ComponentProps } from "react";
import UserStatItem, { UserStatProps } from "./UserStat";
import { Story } from "@storybook/react";

export default {
  title: "molecules/UserStat",
  component: UserStatItem,
};

const Template: Story<ComponentProps<typeof UserStatItem>> = (
  args: UserStatProps
) => <UserStatItem {...args} />;

export const User = Template.bind({});

User.args = {
  name: "CURRENTLY READING",
  count: 6,
  img: "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/0FBCEF7E-7F75-4A54-A472-7B4C481A0C59.svg",
};
