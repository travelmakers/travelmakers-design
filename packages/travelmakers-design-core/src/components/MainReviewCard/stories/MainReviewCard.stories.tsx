import React from "react";
import { MainReviewCard } from "../MainReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/MainReviewCard",
  component: MainReviewCard,
  argTypes: {
    image: {
      defaultValue: "https://picsum.photos/600/400",
      description: "MaiMainReviewCard 컴포넌트의 이미지를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    title: {
      defaultValue: "최OO님의 후기",
      description: "MaiMainReviewCard 컴포넌트의 title 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    job: {
      defaultValue: "대기업 마케터",
      description: "MaiMainReviewCard 컴포넌트의 job 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue:
        "리뷰 컨텐츠 내용, 리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,리뷰 컨텐츠 내용,",
      description: "MaiMainReviewCard 컴포넌트의 description 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <MainReviewCard {...props} />
    </div>
  );
};
