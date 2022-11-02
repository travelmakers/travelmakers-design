import React from "react";
import { Indicator } from "../Indicator";

export default {
  title: "@travelmakers-design/core/Component/Indicator",
  component: Indicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "Indicator 컴포넌트의 색상을 정합니다.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "text",
      description: "Indicator 컴포넌트의 타입을 정합니다.",
      options: ["text", "bullet"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "Indicator 컴포넌트의 토탈 page 수를 정합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    currentPage: {
      defaultValue: 1,
      description: "Indicator 컴포넌트의 현재 page 수를 정합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Indicator {...props} />
    </div>
  );
};
