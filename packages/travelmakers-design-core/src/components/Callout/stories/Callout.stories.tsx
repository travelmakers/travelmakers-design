import React from "react";
import { Callout } from "../Callout";

export default {
  title: "@travelmakers-design/core/Component/Callout",
  component: Callout,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "Callout 컴포넌트의 타입을 정합니다.",
      options: ["default", "warning"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "타이틀",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout 컴포넌트의 타이틀을 정합니다.",
      control: { type: "text" },
    },
    content: {
      defaultValue: "추가 설명을 위한 영역입니다.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Callout 컴포넌트의 내용을 정합니다.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <Callout {...props} />;
};
