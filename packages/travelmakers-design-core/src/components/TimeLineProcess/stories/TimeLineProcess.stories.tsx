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
import { TimeLineProcess } from "../TimeLineProcess";

export default {
  title: "@travelmakers-design/core/Component/TimeLineProcess",
  component: TimeLineProcess,
  argTypes: {
    // status: {
    //   defaultValue: "default",
    //   description: "해당 호텔에 대한 구매 상태를 의미합니다.",
    //   options: ["default", "orange"],
    //   control: { type: "inline-radio" },
    // },
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
    <div style={{ padding: 24 }}>
      <TimeLineProcess {...props} />
    </div>
  );
};
