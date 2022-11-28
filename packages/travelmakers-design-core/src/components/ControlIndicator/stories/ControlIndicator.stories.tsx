import React from "react";
import { ControlIndicator } from "../ControlIndicator";

export default {
  title: "@travelmakers-design/core/Component/ControlIndicator",
  component: ControlIndicator,
  argTypes: {
    color: {
      defaultValue: "navy",
      description: "ControlIndicator 컴포넌트의 색상을 정합니다.",
      options: ["navy", "white"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "small",
      description: "ControlIndicator 컴포넌트의 색상을 정합니다.",
      options: ["small", "large"],
      control: { type: "inline-radio" },
    },
    totalPage: {
      defaultValue: 1,
      description: "ControlIndicator 컴포넌트의 토탈 page 수를 정합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    // [추가]: 컴포넌트 내에서 current page 를 관리해야 버튼 동작을 컨트롤 할 수 있어서 외부에서 current page를 입력 받는 것은 추후 조정 예정
    // currentPage: {
    //   defaultValue: 1,
    //   description: "ControlIndicator 컴포넌트의 현재 page 수를 정합니다.",
    //   table: {
    //     type: {
    //       summary: "number",
    //     },
    //   },
    //   control: { type: "number" },
    // },
    activeBarTransition: {
      defaultValue: false,
      description:
        "ControlIndicator 컴포넌트의 현재 event transition 여부를 정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    infinity: {
      defaultValue: false,
      description: "ControlIndicator 컴포넌트의 무한 루프 여부를 정합니다.",
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
    <div style={{ padding: 24 }}>
      <ControlIndicator {...props} />
    </div>
  );
};
