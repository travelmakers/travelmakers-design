import React from "react";
import { HotelItems } from "../HotelItems";

export default {
  title: "@travelmakers-design/core/Component/HotelItems",
  component: HotelItems,
  argTypes: {
    items: {
      defaultValue: ["1주 살기", "2주 살기", "3주 살기", "한 달 이상"],
      description: "HotelItems 컴포넌트의 레이블을 만들어줍니다.",
      control: { type: "object" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <HotelItems {...props} />
    </div>
  );
};
