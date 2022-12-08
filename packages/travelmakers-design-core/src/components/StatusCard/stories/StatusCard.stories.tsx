import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Meta } from "@storybook/react";
import React from "react";
import { StatusCard } from "../StatusCard";

export default {
  title: "@travelmakers-design/core/Component/Card/StatusCard",
  component: StatusCard,
  argTypes: {
    status: {
      defaultValue: "default",
      description: "해당 호텔에 대한 구매 상태를 의미합니다.",
      options: ["default", "alert"],
      control: { type: "inline-radio" },
    },
    title: {
      defaultValue: "안녕하세요, 홍길동님",
      description: "Title 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    contentDate: {
      defaultValue: new Date(),
      description: "정해진 일시에 대한 Date 객체",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "date" },
    },
    label: {
      defaultValue: "전체 호텔 보러가기",
      description: "Label 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },

    onClick: { action: "clicked" },
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
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <>
      <div style={{ padding: 24 }}>
        <StatusCard {...props} />
      </div>
    </>
  );
};
