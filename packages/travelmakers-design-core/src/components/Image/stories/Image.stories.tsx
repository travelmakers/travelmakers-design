import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";

import { Image } from "../Image";
import { Meta } from "@storybook/react";
import React from "react";

export default {
  title: "@travelmakers-design/core/Component/Image",
  component: Image,
  argTypes: {
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "이미지 src를 정합니다.",
      control: { type: "text" },
    },
    radius: {
      defaultValue: "small",
      description: "Image 컴포넌트의 radius를 정합니다.",
      options: ["small", "medium", "large", "round", "circular"],
      control: { type: "inline-radio" },
    },
    lazy: {
      defaultValue: true,
      description: "true일 경우 lazy load가 적용됩니다.",
      control: { type: "boolean" },
    },
    threshold: {
      defaultValue: 0.5,
      description:
        "lazy 속성이 true이고 Image 컴포넌트 크기 * threshold만큼 화면에 보일 경우 이미지가 로드됩니다.",
      control: { type: "number" },
    },
    width: {
      defaultValue: 400,
      description: "Image 컴포넌트의 너비를 정합니다.",
      control: { type: "number" },
    },
    height: {
      defaultValue: 400,
      description: "Image 컴포넌트의 높이를 정합니다.",
      control: { type: "number" },
    },
    alt: {
      defaultValue: "",
      description: "이미지 설명을 추가합니다.",
      control: { type: "text" },
    },
    fit: {
      defaultValue: "cover",
      description:
        "Image 컴포넌트와 이미지 컨텐츠의 크기를 어떻게 맞출 것인지 정합니다.",
      options: ["cover", "fill", "contain"],
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
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};
