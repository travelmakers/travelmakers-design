import React from "react";
import { CouponCard } from "../CouponCard";

export default {
  title: "@travelmakers-design/core/Component/Card/CouponCard",
  component: CouponCard,
  argTypes: {
    state: {
      defaultValue: "default",
      description: "CouponCard 컴포넌트의 state를 판단합니다.",
      options: ["default", "applied", "checked"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    type: {
      defaultValue: "Week",
      description: "CouponCard 컴포넌트의 type을 판단합니다.",
      options: ["Week", "Month", "All"],
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "inline-radio" },
    },
    day: {
      defaultValue: "1",
      description:
        "CouponCard 컴포넌트의 day를 표시합니다. (단, type이 All일 경우는 표시하지 않습니다.)",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    saleMoney: {
      defaultValue: "00",
      description: "CouponCard 컴포넌트의 할인률을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponName: {
      defaultValue: "호텔에삶 특별 혜택",
      description: "CouponCard 컴포넌트의 쿠폰명칭을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    couponObject: {
      defaultValue: "적용 상품 ㅣ 잔여 수량",
      description: "CouponCard 컴포넌트의 쿠폰 적용 상품을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "*쿠폰 사용 안내 문구",
      description: "CouponCard 컴포넌트의 상세내용을 표시합니다.",
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
      <CouponCard {...props} />
    </div>
  );
};
