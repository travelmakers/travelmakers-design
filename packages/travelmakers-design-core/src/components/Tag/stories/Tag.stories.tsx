import React from "react";
import { Tag } from "../Tag";

export default {
  title: "@travelmakers-design/core/Component/Tag",
  component: Tag,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Tag 컴포넌트의 크기를 정합니다.",
      options: ["small", "medium", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "green",
      description: "Tag 컴포넌트의 색상을 정합니다.",
      options: ["green", "blue", "purple", "gray"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    roundness: {
      defaultValue: false,
      description: "Tag 컴포넌트의 모양을 지정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fill: {
      defaultValue: true,
      description: "Tag 컴포넌트의 스타일을 지정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "Tag 컴포넌트의 disable여부를 정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      {[...Array(10).keys()].map((_, index) => (
        <Tag {...props}>Tag{index + 1}</Tag>
      ))}
    </div>
  );
};
