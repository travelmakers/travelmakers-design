import React from "react";
import { HeaderSection } from "../HeaderSection";

export default {
  title: "@travelmakers-design/core/Component/HeaderSection",
  component: HeaderSection,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "HeaderSection 컴포넌트의 크기를 정합니다.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "페이지 이름",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "HeaderSection 컴포넌트의 타이틀을 정합니다.",
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return <HeaderSection {...props} />;
};
