import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers-design/core/Component/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price 컴포넌트의 타입을 정합니다.",
      options: ["primary", "secondary"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type 한정)Price 컴포넌트의 레이블을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: "70",
      description: "Price 컴포넌트의 할인율을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    nightText: {
      defaultValue: "1박",
      description: "Price 컴포넌트의 1박을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    priceText: {
      defaultValue: "10000",
      description: "Price 컴포넌트의 가격을 표시합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1박 100,000원부터",
      description: "Price 컴포넌트의 시작가격을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentBool: {
      defaultValue: true,
      description: " Price 컴포넌트의 할인율 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    nightBool: {
      defaultValue: true,
      description: " Price 컴포넌트의 1박 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceBool: {
      defaultValue: true,
      description: " Price 컴포넌트의 가격 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    priceStartBool: {
      defaultValue: true,
      description: " Price 컴포넌트의 시작가격 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    couponBool: {
      defaultValue: true,
      description:
        " (secondary type 한정) Price 컴포넌트의 쿠폰 표시여부를 결정합니다.",
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
      <Price {...props} />
    </div>
  );
};
