import React from "react";

import { getTimeLineStateFunc } from "../getTimeLineStateFunc";

export default {
  title: "@travelmakers-design/utils/getTimeLineStateFunc",
  argTypes: {
    state: {
      defaultValue: "default",
      description: "List 컴포넌트의 description을 정합니다.",
      options: [
        "default",
        "tour_confirm_before",
        "tour_confirm",
        "tour_doen",
        "reservation_purchase_before",
        "reservation_purchase_done",
        "checkin_before",
        "day_n",
        "extend_purchase_before",
        "extend_purchase_done",
        "extend_checkin_before",
        "reservation_change_process",
        "checkout_before",
        "checkout_before_n",
        "checkout_done",
        "tour_cancel",
        "reservation_cancel",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      {getTimeLineStateFunc("reservation_purchase_before").secondLineText(
        "2023-02-08T23:24:01.616Z"
      )}
    </div>
  );
};
