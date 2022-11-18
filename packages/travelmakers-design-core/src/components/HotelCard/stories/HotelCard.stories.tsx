import React from "react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers-design/core/Component/HotelCard",
  component: HotelCard,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelCard 컴포넌트의 호텔타입을 정합니다.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    hotelItems: {
      defaultValue: ["회원할인가"],
      description:
        "HotelCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다.",
      control: { type: "object" },
    },
    addressText: {
      defaultValue: "address",
      description:
        "HotelCard 컴포넌트의 이미지 부분에 표시되는 주소를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelName: {
      defaultValue: "호텔명",
      description: "HotelCard 컴포넌트의 호텔명을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "80",
      description: "HotelCard 컴포넌트의 할인되는 퍼센트를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    beforePrice: {
      defaultValue: "100,000원",
      description: "HotelCard 컴포넌트의 정가를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    startPrice: {
      defaultValue: "1박 50,000원 부터",
      description: "HotelCard 컴포넌트의 시작가를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: 200000,
      description: "HotelCard 컴포넌트의 시작가를 표시합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    couponBoolean: {
      defaultValue: true,
      description: "HotelCard 컴포넌트의 시작가를 표시합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    coupons: {
      defaultValue: [],
      description: "HotelCard 컴포넌트의 쿠폰데이터를 가져옵니다.",
      control: { type: "object" },
    },
    timelineTags: {
      defaultValue: ["1주 살기", "2주 살기", "3주 살기", "한 달 이상"],
      description: "HotelCard 컴포넌트의 몇주살기에 대한 레이블을 표시합니다.",
      control: { type: "object" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelCard 컴포넌트의 판매가능 여부를 표시합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelCard {...props} />
    </div>
  );
};
