import { Accordion } from "../Accordion";
import React from "react";

const accordionData = [
  {
    question: "호텔 롱스테이 플랫폼이 무엇인가요?",
    answer: "호텔에삶은 국내 최초 호텔 롱스테이 플랫폼입니다.",
  },
  {
    question: "호텔 롱스테이 플랫폼이 무엇인가요?",
    answer: "호텔에삶은 국내 최초 호텔 롱스테이 플랫폼입니다.",
  },
];

export default {
  title: "@travelmakers-design/core/Component/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      defaultValue: "Default",
      description: "Accordion 컴포넌트의 type을 결정합니다.",
      options: ["Default", "Number", "Checkbox"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    data: {
      defaultValue: accordionData,
      description: "Accordion 컴포넌트 데이터를 설정합니다.",
      table: {
        type: {
          summary: typeof accordionData,
        },
      },
      control: { type: "array" },
    },
    containerStyle: {
      description: "Accordion container에 대한 style을 설정합니다.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
    iconStyle: {
      description: "Icon에 대한 style을 설정합니다.",
      defaultValue: {},
      type: { name: "style", required: false },
      table: {
        type: {
          summary: "StyleProp",
          detail: null,
        },
        defaultValue: { summary: "" },
      },
      control: {
        type: "object",
      },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Accordion {...props} />
    </div>
  );
};
