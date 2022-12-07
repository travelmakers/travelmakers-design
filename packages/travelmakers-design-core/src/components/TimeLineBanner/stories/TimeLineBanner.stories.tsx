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
import { TimeLineBanner } from "../TimeLineBanner";

export default {
  title: "@travelmakers-design/core/Component/TimeLineBanner",
  component: TimeLineBanner,
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
    message: {
      defaultValue:
        "여행같은 일상이 필요하지 않으세요?여행같은 일상이 필요하지 않으세요?여행같은 일상이 필요하지 않으세요?여행같은 일상이 필요하지 않으세요?여행같은 일상이 필요하지 않으세요?",
      description: "Message 텍스트를 지정한다.",
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
    arrowHidden: {
      defaultValue: false,
      description: "Label 우측에 표시되는 arrow 화살표 hidden 여부를 결정한다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
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
    <div style={{ padding: 24 }}>
      <TimeLineBanner {...props} />
    </div>
  );
};
