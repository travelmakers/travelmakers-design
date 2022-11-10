import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import React from "react";
import { Meta } from "@storybook/react";
import { Topbar } from "../Topbar";

export default {
  title: "@travelmakers-design/core/Component/Topbar",
  component: Topbar,
  argTypes: {
    isLogin: {
      defaultValue: false,
      description: "Topbar 컴포넌트의 로그인여부를 정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    isBadge: {
      defaultValue: false,
      description: "Topbar 컴포넌트의 badge여부를 정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
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
    actions: {
      handles: ["click button"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <Topbar {...props} />
    </div>
  );
};
