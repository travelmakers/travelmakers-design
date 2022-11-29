import React from "react";
import { CarouselTitleCard } from "../CarouselTitleCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CarouselTitleCard",
  component: CarouselTitleCard,
  argTypes: {
    newBadge: {
      defaultValue: false,
      description: "CarouselTitleCard 컴포넌트의 newBadge 여부를 판단합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    subHeadline: {
      defaultValue: "서브헤드라인",
      description: "CarouselTitleCard 컴포넌트의 서브헤드라인을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    headline: {
      defaultValue: "헤드라인",
      description: "CarouselTitleCard 컴포넌트의 헤드라인을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "디스크립션",
      description: "CarouselTitleCard 컴포넌트의 디스크립션을 표시합니다.",
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
      <CarouselTitleCard {...props} />
    </div>
  );
};
