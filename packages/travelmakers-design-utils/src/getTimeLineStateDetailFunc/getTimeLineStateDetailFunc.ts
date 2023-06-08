import { getKorMoment } from "../getDate";
import { getCountDown } from "../utils/getCountDown";
import { getTimeStamp } from "../utils/getTimeStamp";

type ReservationState =
  | "default"
  | "tour_confirm_before"
  | "tour_confirm"
  | "tour_done"
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

export interface timeLineStateDetailParams {
  enum: ReservationState;
  thirdLineText: (hotelName: string) => string;
  titleDisable?: () => boolean;
  messageDisable?: () => boolean;
  messageUnderline?: () => boolean;
  link: (url?: string) => {
    url: string;
    arrow: boolean;
  };
}

interface timeLineStateDetailParamsWithExpectedDate
  extends timeLineStateDetailParams {
  firstLineText: (state?: string) => string;
  secondLineText: (expectedDate: string) => string;
}

interface timeLineStateDetailParamsWithStartDate
  extends timeLineStateDetailParams {
  firstLineText: (state?: string) => string;
  secondLineText: (start_date: string) => string;
}

interface timeLineStateDetailParamsWithEndDate
  extends timeLineStateDetailParams {
  firstLineText: (state?: string) => string;
  secondLineText: (end_date: string) => string;
}

interface timeLineStateDetailParamsWithEndDateDday
  extends timeLineStateDetailParams {
  firstLineText: (dDay: number | string) => string;
  secondLineText: (end_date: string) => string;
}

interface timeLineStateDetailParamsWithBankDate
  extends timeLineStateDetailParams {
  firstLineText: (state?: string) => string;
  secondLineText: (vbank_date: string) => string;
}

interface timeLineStateDetailParamsWithNull extends timeLineStateDetailParams {
  firstLineText: (state?: string) => string;
  secondLineText: () => string;
  secondLink: (url?: string) => string;
}

interface timeLineStateDetailParamsWithCancelDate
  extends timeLineStateDetailParams {
  firstLineText: (state?: string) => string;
  secondLineText: (cancelDate) => string;
}

type AllTypes =
  | timeLineStateDetailParamsWithExpectedDate
  | timeLineStateDetailParamsWithStartDate
  | timeLineStateDetailParamsWithEndDate
  | timeLineStateDetailParamsWithEndDateDday
  | timeLineStateDetailParamsWithBankDate
  | timeLineStateDetailParamsWithNull
  | timeLineStateDetailParamsWithCancelDate;

export function getTimeLineStateDetailFunc(
  t:
    | "tour_confirm_before"
    | "reservation_purchase_done"
    | "extend_purchase_done"
    | "reservation_change_process"
): timeLineStateDetailParamsWithExpectedDate;

export function getTimeLineStateDetailFunc(
  t: "tour_confirm" | "tour_done" | "checkin_before" | "extend_checkin_before"
): timeLineStateDetailParamsWithStartDate;

export function getTimeLineStateDetailFunc(
  t: "day_n"
): timeLineStateDetailParamsWithEndDate;

export function getTimeLineStateDetailFunc(
  t: "checkout_before" | "checkout_before_n"
): timeLineStateDetailParamsWithEndDateDday;

export function getTimeLineStateDetailFunc(
  t: "reservation_purchase_before" | "extend_purchase_before"
): timeLineStateDetailParamsWithBankDate;

export function getTimeLineStateDetailFunc(
  t: "checkout_done"
): timeLineStateDetailParamsWithNull;

export function getTimeLineStateDetailFunc(
  t: "tour_cancel" | "reservation_cancel"
): timeLineStateDetailParamsWithCancelDate;

export function getTimeLineStateDetailFunc(state: ReservationState): AllTypes {
  switch (state) {
    case "tour_confirm_before":
      // NOTE: 투어 확정 전
      return {
        enum: state,
        firstLineText: () => `투어 확정 전`,
        secondLineText: (expectedDate) =>
          `${getTimeStamp(getKorMoment(expectedDate))} 이내 확정 예정`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "tour_confirm":
      // NOTE: 투어 확정
      return {
        enum: state,
        firstLineText: () => `투어 확정`,
        secondLineText: (startDate) =>
          `${getTimeStamp(getKorMoment(startDate), true)} 방문`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "tour_done":
      // NOTE: 투어 완료
      return {
        enum: state,
        firstLineText: () => `투어 완료`,
        secondLineText: (startDate) =>
          `${getTimeStamp(getKorMoment(startDate), true)} 방문`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "reservation_purchase_before":
      // NOTE: 결제 진행 중 (가상 계좌)
      return {
        enum: state,
        firstLineText: () => `결제 진행 중`,
        secondLineText: (vbank_date) => {
          if (vbank_date) {
            const countDate = getCountDown(vbank_date);
            if (countDate && countDate === "0시간 0분") {
              return "입금 기한 만료";
            } else {
              return countDate + " 내 입금 필요";
            }
          }
          return "";
        },
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "extend_purchase_before":
      // NOTE: 연장 결제 전
      return {
        enum: state,
        firstLineText: () => `연장 결제 전`,
        secondLineText: (vbank_date) => {
          if (vbank_date) {
            const countDate = getCountDown(vbank_date);
            if (countDate && countDate === "0시간 0분") {
              return "입금 기한 만료";
            } else {
              return countDate + " 내 입금 필요";
            }
          }
          return "";
        },
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "reservation_purchase_done":
      // NOTE: 예약 확정 전
      return {
        enum: state,
        firstLineText: () => `예약 확정 전`,
        secondLineText: (expectedDate) =>
          `${getTimeStamp(getKorMoment(expectedDate))} 이내 확정`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "checkin_before":
      // NOTE: 체크인 전
      return {
        enum: state,
        firstLineText: (dDay) => {
          if (dDay && dDay === "0") {
            return `체크인 D-Day`;
          }
          return `체크인 D-${dDay}`;
        },
        secondLineText: (startDate) =>
          `${getTimeStamp(getKorMoment(startDate), true)} 체크인`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "day_n":
      // NOTE: 입주 N일차
      return {
        enum: state,
        firstLineText: () => `호텔 이용 중`,
        secondLineText: (endDate) =>
          `${getTimeStamp(getKorMoment(endDate), true)} 체크아웃`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "extend_purchase_done":
      // NOTE: 연장확정전
      return {
        enum: state,
        firstLineText: () => `연장 확정 전`,
        secondLineText: (expectedDate) =>
          `${getTimeStamp(getKorMoment(expectedDate))} 이내 확정 예정`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "extend_checkin_before":
      // NOTE: 연장확정
      return {
        enum: state,
        firstLineText: () => `연장 확정`,
        secondLineText: (startDate) =>
          `${getTimeStamp(getKorMoment(startDate), true)} 체크인`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "reservation_change_process":
      // NOTE: 예약 변경 중
      return {
        enum: state,
        firstLineText: () => `예약 변경 중`,
        secondLineText: (expectedDate) =>
          `${getTimeStamp(getKorMoment(expectedDate))} 이내 확정`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "checkout_before":
      // NOTE: 체크아웃 전
      return {
        enum: state,
        firstLineText: (dDay) => {
          if (dDay && dDay === "0") {
            return `체크아웃 D-Day`;
          }
          return `체크아웃 D-${dDay}`;
        },
        secondLineText: (end_date) =>
          `${getTimeStamp(getKorMoment(end_date), true)} 체크아웃`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      return {
        enum: state,
        firstLineText: (dDay) => {
          if (dDay && dDay === "0") {
            return `체크아웃 D-Day`;
          }
          return `체크아웃 D-${dDay}`;
        },
        secondLineText: (end_date) =>
          `${getTimeStamp(getKorMoment(end_date), true)} 체크아웃`,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "checkout_done":
      // NOTE: 체크아웃
      return {
        enum: state,
        firstLineText: () => `체크아웃 완료`,
        secondLineText: () => `재구매하기`,
        secondLink: (url) => url,
        thirdLineText: (hotelName) => hotelName,
        titleDisable: () => true,
        messageDisable: () => false,
        messageUnderline: () => true,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "tour_cancel":
      // NOTE: 투어 취소
      return {
        enum: state,
        firstLineText: () => `투어 취소`,
        titleDisable: () => true,
        messageDisable: () => true,
        messageUnderline: () => false,
        secondLineText: (cancelDate) =>
          `${getTimeStamp(getKorMoment(cancelDate), true)} 방문 취소`,
        thirdLineText: (hotelName) => hotelName,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    case "reservation_cancel":
      // NOTE: 예약 취소 완료(환불O)
      return {
        enum: state,
        firstLineText: () => `취소 완료`,
        titleDisable: () => true,
        messageDisable: () => true,
        messageUnderline: () => false,
        secondLineText: (cancelDate) =>
          `${getTimeStamp(getKorMoment(cancelDate), true)} 방문 취소`,
        thirdLineText: (hotelName) => hotelName,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
    default:
      return {
        enum: state,
        firstLineText: () => ``,
        secondLineText: () => ``,
        titleDisable: () => false,
        messageDisable: () => false,
        messageUnderline: () => false,
        thirdLineText: (hotelName) => hotelName,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
      };
  }
}

type Props = {
  first: {
    dDay?: number;
  };
  second: {
    userName?: string;
    hotelName?: string;
    expectedDate?: string;
    startDate?: string;
    cancelDate?: string;
    endDate?: string;
    vBankDate?: string;
    dDay?: number;
  };
  third?: {
    hotelName?: string;
  };
  roomTypeText?: {
    roomType?: string;
  };
};

interface TimeLineStatePropsReturnType {
  first: string;
  second: string;
  third: string;
}

export function getTimeLineStateDetailProps(
  state: ReservationState,
  props: Props
): TimeLineStatePropsReturnType {
  switch (state) {
    case "checkout_before":
    case "checkout_before_n":
      return {
        first: `${props.first.dDay}`,
        second: props.second.endDate,
        third: props.third.hotelName,
      };
    case "tour_confirm_before":
    case "reservation_purchase_done":
    case "extend_purchase_done":
    case "reservation_change_process":
      return {
        first: null,
        second: props.second.expectedDate,
        third: props.third.hotelName,
      };
    case "tour_confirm":
    case "tour_done":
    case "checkin_before":
    case "extend_checkin_before":
      return {
        first: `${props.first.dDay}`,
        second: props.second.startDate,
        third: props.third.hotelName,
      };
    case "day_n":
      return {
        first: null,
        second: props.second.endDate,
        third: props.third.hotelName,
      };
    case "reservation_purchase_before":
    case "extend_purchase_before":
      return {
        first: null,
        second: props.second.vBankDate,
        third: props.third.hotelName,
      };
    case "checkout_done":
      return {
        first: null,
        second: null,
        third: props.third.hotelName,
      };
    case "tour_cancel":
    case "reservation_cancel":
      return {
        first: null,
        second: props.second.cancelDate,
        third: props.third.hotelName,
      };

    default:
      return {
        first: null,
        second: null,
        third: props.third.hotelName,
      };
  }
}
