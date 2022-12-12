import { useEffect, useRef } from "react";

type ReservationState =
  | "default"
  | "tour_confirm_before"
  | "tour_confirm"
  | "tour_doen"
  | "reservation_purchase_before"
  | "reservation_purchase_done"
  | "checkin_before"
  | "day_n"
  | "extend_purchase_before"
  | "extend_purchase_done"
  | "extend_checkin_before"
  | "reservation_change_process"
  | "checkout_before"
  | "checkout_before_n"
  | "checkout_done"
  | "tour_cancel"
  | "reservation_cancel";

export type timeLineStateParams = {
  enum: string;
  firstLineText: (userName?: string, hotelName?: string) => string;
  secondLineText: (
    userName?: string,
    hotelName?: string,
    expectedDate?: string,
    startDate?: string,
    endDate?: string,
    dDay?: string
  ) => string;
  buttonText: (expectedDate?: string, endDate?: string) => string;
  link?: string;
};

interface props {
  [key: string]: timeLineStateParams;
}

export const timeLineState: props = {
  DEFAULT: {
    enum: "default",
    firstLineText: (userName?: string) => `안녕하세요 ${userName}님`,
    secondLineText: () => `여행같은 일상이 필요하지 않으세요?`,
    buttonText: () => `전체 호텔 보러가기`,
    link: undefined,
  },
  TOUR_CONFIRM_BEFORE: {
    enum: "tour_confirm_before",
    firstLineText: (userName?: string) => `안녕하세요 ${userName}님`,
    secondLineText: (hotelName?: string) => `${hotelName}`,
    buttonText: () => `투어 확정 전이에요`,
    link: undefined,
  },
  TOUR_CONFIRM: {
    enum: "tour_confirm",
    firstLineText: (userName?: string) => `${userName}님`,
    secondLineText: (hotelName?: string) => `${hotelName}`,
    buttonText: () => `투어 확정 전이에요`,
    link: undefined,
  },
};

export const getTimeLineFunc = (state: ReservationState) => {
  return timeLineState[state.toUpperCase()];
};
