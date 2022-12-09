import React from "react";
import { List } from "../List";

export default {
  title: "@travelmakers-design/core/Component/List",
  component: List,
  argTypes: {
    items: {
      defaultValue: [
        { title: "예약 내역", onClick: () => console.log("예약 내역") },
        {
          title: "회원 정보 변경",
          onClick: () => console.log("회원 정보 변경"),
        },
        { title: "알림 설정", onClick: () => console.log("알림 설정") },
      ],
      description: "List 컴포넌트의 description을 정합니다.",
      control: { type: "object" },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <List {...props} />
    </div>
  );
};
