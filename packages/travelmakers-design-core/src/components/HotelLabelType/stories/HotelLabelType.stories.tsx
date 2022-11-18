import React from "react";
import { HotelLabelType } from "../HotelLabelType";

export default {
  title: "@travelmakers-design/core/Component/HotelLabelType",
  component: HotelLabelType,
  argTypes: {
    type: {
      defaultValue: "default",
      description: "HotelLabelType 컴포넌트의 type을 정합니다.",
      options: ["default", "hotel-mini", "residence"],
      control: { type: "inline-radio" },
    },
    soldOut: {
      defaultValue: false,
      description: "HotelLabelType 컴포넌트의 판매가능 여부를 표시합니다.",
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
      <HotelLabelType {...props} />
    </div>
  );
};
