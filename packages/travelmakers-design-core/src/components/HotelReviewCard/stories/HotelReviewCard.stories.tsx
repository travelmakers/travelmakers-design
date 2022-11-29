import React from "react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design/core/Component/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    hotelImage: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelReviewCard 컴포넌트의 이미지를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    tags: {
      defaultValue: ["1주 살기", "2주 살기", "3주 살기", "한 달 이상"],
      description: "HotelReviewCard 컴포넌트의 레이블을 표시합니다.",
      control: { type: "object" },
    },
    content: {
      defaultValue:
        " 호텔에 삶을 알게 된 이후 내년 꿈에 그리던 새아파트 입주를 앞두고 기존에 전세 계약 종료일이 다가와서 단기로 살수있을만한 곳을 이리저리 알아보게 됐습니다. 가장 먼저 생각했던건 회사근처 오피스텔 월세였지만 최소1년 계약단위로만 이루어지는 계약과 부동산 복비 마지막으로 보증금을 내야한다는게 여간힘든게 아니더라구요.",
      description: "HotelReviewCard 컴포넌트의 내용을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    reviewName: {
      defaultValue: "홍길동",
      description: "HotelReviewCard 컴포넌트의 리뷰어 이름을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelOption: {
      defaultValue: "한달 살기",
      description: "HotelReviewCard 컴포넌트의 상품옵션을 표시합니다.",
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
      <HotelReviewCard {...props} />
    </div>
  );
};
