import React from "react";
import { OptionCard } from "../OptionCard";

export default {
  title: "@travelmakers-design/core/Component/Card/OptionCard",
  component: OptionCard,
  argTypes: {
    labelItems: {
      defaultValue: ["회원할인가"],
      description:
        "HotelCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다.",
      control: { type: "object" },
    },
    headTitle: {
      defaultValue: "Room Type",
      description: "OptionCard 컴포넌트의 상단 Title Name을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    footerTitle: {
      defaultValue: "Benefit",
      description: "OptionCard 컴포넌트의 하단 Title Name을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isPrice: {
      defaultValue: true,
      description: "OptionCard 컴포넌트의 Price 표시여부를 판단합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    isLabel: {
      defaultValue: true,
      description: "OptionCard 컴포넌트의 Label 표시여부를 판단합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    isDuration: {
      defaultValue: true,
      description: "OptionCard 컴포넌트의 Duration 표시여부를 판단합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    optionName: {
      defaultValue: "옵션 설명",
      description: "OptionCard 컴포넌트의 optionName을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    minNight: {
      defaultValue: 1,
      description: "OptionCard 컴포넌트의 최소 -박(night)을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    maxNight: {
      defaultValue: 2,
      description: "OptionCard 컴포넌트의 최대 -박(night)을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    roomType: {
      defaultValue: "룸 타입 / 룸 타입",
      description: "OptionCard 컴포넌트의 roomType을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    benefitContent: {
      defaultValue:
        "혜택 설명을 입력하세요<br /> 혜택 설명을 입력하세요<br /> 혜택 설명을 입력하세요<br />",
      description: "OptionCard 컴포넌트의 benefitContent을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    salePercent: {
      defaultValue: 10,
      description: "OptionCard 컴포넌트의 salePercent을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    price: {
      defaultValue: 100000,
      description: "OptionCard 컴포넌트의 price(정가)을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    salePrice: {
      defaultValue: 100000,
      description: "OptionCard 컴포넌트의 salePrice(할인된 가격)을 표사합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    buttonName: {
      defaultValue: "버튼",
      description: "OptionCard 컴포넌트의 benefitContent을 표시합니다.",
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
      <OptionCard {...props} />
    </div>
  );
};
