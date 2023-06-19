import React,{ComponentProps} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import InputField,{TextFieldProps} from ".";

const InputStory={
    title:"Atoms/Input",
    component:InputField,
};


const Template: Story<ComponentProps<typeof InputField>>=(args:TextFieldProps)=>
    <InputField {...args} />;

export const Input = Template.bind({});
Input.args={
    placeholder:'InputField',
    onChange:action('Input changed'),
    disableUnderline:true,
    autoFocus:true,
    size:'small',
};

export const UnderlinedTextField= Template.bind({});
UnderlinedTextField.args={
    placeholder:'InputField',
    onChange:action('Input changed'),
    disableUnderline:false,
    autoFocus:false,
    size:'medium',
};

export const NumberTextField= Template.bind({});
NumberTextField.args={
    placeholder:'InputField',
    onChange:action('Input changed'),
    disableUnderline:false,
    type:'number',
};
export default InputStory;