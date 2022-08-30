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
import { Typography } from "../Typography";

export default {
  title: "@travelmakers-design/core/General/Typography",
  component: Typography,
  argTypes: {
    level: {
      defaultValue: "h1",
      description: "Typography 컴포넌트의 크기를 정합니다.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    family: {
      defaultValue: "Noto Serif KR",
      description: "Typography 컴포넌트의 font-family를 정합니다.",
      options: ["Noto Serif KR", "Pretendard", "PT Serif"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    textAlign: {
      defaultValue: "left",
      description: "Typography 컴포넌트의 text-align을 정합니다.",
      options: ["left", "center", "right"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    disabled: {
      defaultValue: false,
      description: "true일 경우 Text가 disabled 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    strong: {
      defaultValue: false,
      description: "true일 경우 Text가 strong 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    italic: {
      defaultValue: false,
      description: "true일 경우 Text가 italic 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    underline: {
      defaultValue: false,
      description: "true일 경우 Text가 underline 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    mobileLevel: {
      defaultValue: "",
      description: "mobile일 경우의 Typography 컴포넌트의 크기를 지정합니다.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
    },
    tabletLevel: {
      defaultValue: "",
      description: "tablet일 경우의 Typography 컴포넌트의 크기를 지정합니다.",
      options: [
        "b3",
        "b2",
        "b1",
        "h6",
        "h5",
        "h4",
        "h3",
        "h2",
        "h1",
        "caption",
      ],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "select" },
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
    <>
      <Typography {...props} level={"h1"}>
        h1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h2"}>
        h2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h3"}>
        h3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h4"}>
        h4. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h5"}>
        h5. Travelmakers Design
      </Typography>
      <Typography {...props} level={"h6"}>
        h6. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b1"}>
        b1. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b2"}>
        b2. Travelmakers Design
      </Typography>
      <Typography {...props} level={"b3"}>
        b3. Travelmakers Design
      </Typography>
      <Typography {...props} level={"caption"}>
        caption. Travelmakers Design
      </Typography>
    </>
  );
};
