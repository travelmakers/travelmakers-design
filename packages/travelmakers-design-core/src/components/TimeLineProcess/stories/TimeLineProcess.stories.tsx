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
    status: {
      defaultValue: "reservation_purchase_before",
      description: "결제 프로세스 상태값을 반환합니다.",
      options: ["reservation_purchase_before", "reservation_purchase_done"],
      control: { type: "inline-radio" },
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
    <div style={{ padding: 24 }}>
      <TimeLineProcess {...props} />
    </div>
  );
};
