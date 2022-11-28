import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Timer } from "../Timer";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Timer",
  component: Timer,
  argTypes: {
    size: {
      defaultValue: "small",
      description: "Timer 컴포넌트의 크기를 정합니다.",
      options: ["small", "large"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "navy",
      description: "Timer 컴포넌트의 색상을 정합니다.",
      options: ["navy", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "타임세일 라벨",
      description: "Timer 컴포넌트의 라밸을 정합니다.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "text" },
    },
    endAt: {
      defaultValue: new Date(),
      description: "Timer 컴포넌트의 타이머가 끝나는 시간을 정합니다.",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      control: { type: "date" },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ padding: 24, display: "flex" }}>
      <Timer {...props}></Timer>
    </div>
  );
};
