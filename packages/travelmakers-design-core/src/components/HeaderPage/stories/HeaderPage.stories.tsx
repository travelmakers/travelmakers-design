import React from "react";
import { HeaderPage } from "../HeaderPage";

export default {
  title: "@travelmakers-design/core/Component/HeaderPage",
  component: HeaderPage,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderPage 컴포넌트의 크기를 정합니다.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "HeaderPage 컴포넌트의 색상을 정합니다.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "타이틀",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderPage 컴포넌트의 타이틀을 정합니다.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderPage {...props} />;
};
