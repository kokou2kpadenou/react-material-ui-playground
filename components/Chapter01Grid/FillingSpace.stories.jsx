import React from "react";
import FillingSpace from "./FillingSpace";

export default {
  title: "Course/Chapter 01/Filling Space",
  component: FillingSpace,
};

const Template = (args) => <FillingSpace {...args} />;

export const Default = Template.bind({});

export const Center = Template.bind({});
Center.args = {
  justify: "center",
};
