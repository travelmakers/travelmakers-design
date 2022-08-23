import { Button } from "../Button";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      options: ["solid", "ghost", "light-solid", "text"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "purple",
      options: ["purple", "gray", "red", "blue", "orange", "green", "dark"],
      control: { type: "inline-radio" },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    loading: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <Button {...props}>Button</Button>;
};

export const OverrideStyles = (props) => {
  return (
    <Button
      {...props}
      overrideStyles={{
        solid: {
          backgroundColor: "black",
          "&:not(:disabled):hover": {
            backgroundColor: "#222",
          },
          "&:not(:disabled):active": {
            backgroundColor: "#444",
          },
        },
      }}
    >
      Button
    </Button>
  );
};
