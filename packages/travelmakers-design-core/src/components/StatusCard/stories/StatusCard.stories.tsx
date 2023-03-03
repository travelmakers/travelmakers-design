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
    hotelImage: {
      defaultValue: "https://picsum.photos/60/40",
      description: "이미지 표시",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "투어 확정 전",
      description: "Title 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    message: {
      defaultValue: "00월 00일 이내 확정 예정",
      description: "message 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    roomType: {
      defaultValue: "한달살기・슈페리어 디럭스 트윈, 홍길동님",
      description: "message 텍스트를 지정한다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
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
    isArrow: {
      defaultValue: true,
      description: "Arrow 표시 여부를 결정한다.",
      control: { type: "boolean" },
    },
    isLabel: {
      defaultValue: true,
      description: "Label 표시 여부를 결정한다.",
      control: { type: "boolean" },
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
