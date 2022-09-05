import React from "react";
import { SearchInput } from "../SearchInput";
// import { Tooltip } from "../../Tooltip";

export default {
  title: "@travelmakers-design/core/Component/SearchInput",
  component: SearchInput,
  argTypes: {
    width: {
      defaultValue: 328,
      description: "Input 컴포넌트 너비를 설정합니다. (default:100%)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    placeholder: {
      defaultValue: "정보를 입력해주세요.",
      description:
        "Input 컴포넌트 요소에 입력될 값에 대한 짧은 힌트를 명시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    line: {
      defaultValue: true,
      description: "SearchInput 컴포넌트 Style을 지정합니다. (default: true)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "disabled 상태가 됩니다.",
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
      <SearchInput {...props} />
    </div>
  );
};
