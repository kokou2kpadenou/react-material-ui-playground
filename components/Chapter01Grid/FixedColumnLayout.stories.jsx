import React from "react";
import FixedColumnLayout from "./FixedColumnLayout";

export default {
  title: "Course/Chapter 01/Fixed Column Layout",
  component: FixedColumnLayout,
};

const Template = (args) => <FixedColumnLayout {...args} />;

export const Twelve = Template.bind({});
Twelve.args = {
  width: 12,
};
export const Six = Template.bind({});
Six.args = {
  width: 6,
};
