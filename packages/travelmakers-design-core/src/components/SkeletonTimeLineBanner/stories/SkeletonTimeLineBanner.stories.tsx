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
import { SkeletonTimeLineBanner } from "../SkeletonTimeLineBanner";

export default {
  title: "@travelmakers-design/core/Component/SkeletonTimeLineBanner",
  component: SkeletonTimeLineBanner,
  argTypes: {},
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
      <div style={{ padding: 24, width: 328 }}>
        <SkeletonTimeLineBanner />
      </div>
    </>
  );
};
