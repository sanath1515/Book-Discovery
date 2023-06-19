import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import Batchmates, { BatchmatesProps } from ".";

const BatchmatesStory = {
  title: "Organisms/BatchmatesMock",
  component: Batchmates,
};

const Template: Story<ComponentProps<typeof Batchmates>> = (
  args: BatchmatesProps
) => <Batchmates {...args} />;

export const BatchmatesMock = Template.bind({});

BatchmatesMock.args = {
  booksSrc: [
    {
      image:
        "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/A78B8C90-C12E-45B1-9523-2C24CCA913ED.png",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61JPFJpEZxL._SY445_SX342_QL70_ML2_.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/71u9RfUhiPL.jpg",
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/I/81OrIk+OffL.jpg",
    },
  ],
};

export default BatchmatesStory;
