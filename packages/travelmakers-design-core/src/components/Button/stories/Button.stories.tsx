import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Button } from "../Button";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Button",
  component: Button,
  argTypes: {
    size: {
      defaultValue: "medium",
      description: "Button 컴포넌트의 크기를 정합니다.",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    variant: {
      defaultValue: "solid",
      description: "Button 컴포넌트의 모양을 지정합니다.",
      options: ["solid", "ghost"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    color: {
      defaultValue: "dark",
      description: "Button 컴포넌트의 색상을 정합니다.",
      options: ["dark", "green", "white"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    radius: {
      defaultValue: false,
      description: "true일 경우 radius를 100px로 지정합니다. (default: false)",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      defaultValue: false,
      description: "true일 경우 좌우 공간을 모두 차지합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    type: {
      defaultValue: "button",
      description: "button 요소의 type을 지정합니다.",
      options: ["submit", "button", "reset"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    loading: {
      defaultValue: false,
      description: "true일 경우 로딩 상태가 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true일 경우 button이 disabled 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    leftIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button 컴포넌트 좌측 영역에 요소를 추가합니다.",
      control: { type: "text" },
    },
    rightIcon: {
      defaultValue: "",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
      description: "Button 컴포넌트 좌측 영역에 요소를 추가합니다.",
      control: { type: "text" },
    },
    spinnerProps: {
      defaultValue: "",
      description: "Spinner 컴포넌트의 props들을 오버라이드 합니다.",
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
  return <Button {...props}>Button</Button>;
};
