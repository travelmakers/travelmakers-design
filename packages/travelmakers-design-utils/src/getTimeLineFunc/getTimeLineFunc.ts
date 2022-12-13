import { getTimeStamp, getTimeStampCheckIn } from "../utils/getTimeStamp";

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

export interface timeLineStateParams {
  enum: ReservationState;
  link: (url?: string) => {
    url: string;
    arrow: boolean;
  };
  color: "default" | "alert";
}

interface timeLineStateParamsOnlyUserName extends timeLineStateParams {
  firstLineText: (userName: string) => string;
  secondLineText: () => string;
  buttonText: () => string;
}
interface timeLineStateParamsWithUserName_HotelName
  extends timeLineStateParams {
  firstLineText: (userName: string) => string;
  secondLineText: (hotelName: string) => string;
  buttonText: () => string;
}
interface timeLineStateParamsWithUserName_StartDate
  extends timeLineStateParams {
  firstLineText: (userName: string) => string;
  secondLineText: (startDate: string) => string;
  buttonText: () => string;
}
interface timeLineStateParamsWithUserName_HotelName_ExpectedDate
  extends timeLineStateParamsWithUserName_HotelName {
  buttonText: (expectedDate?: string) => string;
}
interface timeLineStateParamsWithUserName_EndDate extends timeLineStateParams {
  firstLineText: (userName: string) => string;
  secondLineText: (endDate: string) => string;
  buttonText: () => string;
}
interface timeLineStateParamsWithUserName_Dday extends timeLineStateParams {
  firstLineText: (hotelName: string) => string;
  secondLineText: (dDay: number) => string;
  buttonText: () => string;
}
interface timeLineStateParamsWithUserName_EndDate_Dday
  extends timeLineStateParams {
  firstLineText: (hotelName: string) => string;
  secondLineText: (dDay: number) => string;
  buttonText: (endDate: string) => string;
}

type AllTypes =
  | timeLineStateParamsOnlyUserName
  | timeLineStateParamsWithUserName_HotelName
  | timeLineStateParamsWithUserName_StartDate
  | timeLineStateParamsWithUserName_HotelName_ExpectedDate
  | timeLineStateParamsWithUserName_EndDate
  | timeLineStateParamsWithUserName_Dday
  | timeLineStateParamsWithUserName_EndDate_Dday;

export function getTimeLineFunc(
  t: "default" | "tour_done" | "tour_cancel" | "reservation_cancel"
): timeLineStateParamsOnlyUserName;
export function getTimeLineFunc(
  t: "tour_confirm_before" | "reservation_purchase_before" | "checkout_done"
): timeLineStateParamsWithUserName_HotelName;
export function getTimeLineFunc(
  t: "tour_confirm" | "checkin_before"
): timeLineStateParamsWithUserName_StartDate;
export function getTimeLineFunc(
  t: "reservation_purchase_done"
): timeLineStateParamsWithUserName_HotelName_ExpectedDate;
export function getTimeLineFunc(
  t:
    | "day_n"
    | "extend_purchase_before"
    | "extend_purchase_done"
    | "extend_checkin_before"
    | "reservation_change_process"
): timeLineStateParamsWithUserName_EndDate;
export function getTimeLineFunc(
  t: "checkout_before"
): timeLineStateParamsWithUserName_Dday;
export function getTimeLineFunc(
  t: "checkout_before_n"
): timeLineStateParamsWithUserName_EndDate_Dday;

export function getTimeLineFunc(state: ReservationState): AllTypes {
  switch (state) {
    case "default" || "tour_cancel" || "reservation_cancel":
      // NOTE: 구매 전
      return {
        enum: state,
        firstLineText: (userName) => `안녕하세요, ${userName}님`,
        secondLineText: () => `여행같은 일상이 필요하지 않으세요?`,
        buttonText: () => `전체 호텔 보러가기`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "default",
      };
    case "tour_confirm_before":
      // NOTE: 투어 확정 전
      return {
        enum: state,
        firstLineText: (userName) => `${userName}님`,
        secondLineText: (hotelName) => hotelName,
        buttonText: () => `투어 확정 전이에요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
    case "tour_confirm":
      // NOTE: 투어 확정
      return {
        enum: state,
        firstLineText: (userName) => `${userName}님`,
        secondLineText: (startDate) =>
          `${getTimeStamp(new Date(startDate))} 투어가 확정됐어요`,
        buttonText: () => `약속시간에 꼭 방문해주세요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
    case "tour_done":
      // NOTE: 투어 완료
      return {
        enum: state,
        firstLineText: (userName) => `${userName}님`,
        secondLineText: () => `투어는 어떠셨나요?`,
        buttonText: () => `호텔에삶을 경험해보세요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "default",
      };
    case "reservation_purchase_before":
      // NOTE: 결제 진행 중 (가상 계좌)
      return {
        enum: state,
        firstLineText: (userName) => `안녕하세요, ${userName}님`,
        secondLineText: (hotelName) => `${hotelName}`,
        buttonText: () => `아직 입금이 완료되지 않았어요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
    case "reservation_purchase_done":
      // NOTE: 예악 확정 전
      return {
        enum: state,
        firstLineText: (userName) => `안녕하세요, ${userName}님`,
        secondLineText: (hotelName) => `${hotelName}`,
        buttonText: (expectedDate) =>
          `${getTimeStamp(new Date(expectedDate))} 이내 확정 예정이에요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
    case "checkin_before":
      // NOTE: 체크인 전
      return {
        enum: state,
        firstLineText: (userName) => `${userName}님`,
        secondLineText: (startDate) =>
          `${getTimeStampCheckIn(new Date(startDate))} 체크인 예정이에요`,
        buttonText: () => `편안한 호텔에삶 되세요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "default",
      };
    case "day_n" ||
      "extend_purchase_before" ||
      "extend_purchase_done" ||
      "extend_checkin_before" ||
      "reservation_change_process":
      // NOTE: 입주 N일차 / 연장결제전 / 연장확정전/ 연장확정
      return {
        enum: state,
        firstLineText: (userName) => `${userName}님`,
        secondLineText: (endDate) =>
          `체크아웃은 ${getTimeStampCheckIn(new Date(endDate))}에요`,
        buttonText: () => `편안한 호텔에삶 되세요`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "default",
      };
    case "checkout_before":
      // NOTE: 체크아웃 전
      return {
        enum: state,
        firstLineText: (hotelName) => `${hotelName}`,
        secondLineText: (dDay) => `퇴실까지 ${dDay} 남았어요`,
        buttonText: () => `호텔에삶을 연장하시겠어요?`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      return {
        enum: state,
        firstLineText: (hotelName) => `${hotelName}`,
        secondLineText: (dDay) => `퇴실까지 ${dDay} 남았어요`,
        buttonText: (endDate) =>
          `${getTimeStampCheckIn(new Date(endDate))} 체크아웃 입니다`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
    case "checkout_done":
      // NOTE: 체크아웃
      return {
        enum: state,
        firstLineText: (userName) => `${userName}님`,
        secondLineText: (hotelName) => `${hotelName}`,
        buttonText: () => `호텔에삶은 어떠셨나요?`,
        link: (url?: string) => {
          return { url, arrow: !!url };
        },
        color: "alert",
      };
  }
}

type Props = {
  first: {
    userName?: string;
    hotelName?: string;
  };
  second: {
    userName?: string;
    hotelName?: string;
    expectedDate?: string;
    startDate?: string;
    endDate?: string;
    dDay?: string;
  };
  buttonText?: {
    expectedDate?: string;
    endDate?: string;
  };
};

interface GetTimeLinePropsReturnType {
  first?: string;
  second?: string;
  buttonText?: string;
}

export function getTimeLineProps(
  state: ReservationState,
  props: Props
): GetTimeLinePropsReturnType {
  switch (state) {
    case "default" || "tour_cancel" || "reservation_cancel":
      return {
        first: props.first.userName,
        second: null,
        buttonText: null,
      };

    case "tour_confirm_before":
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: null,
      };
    case "tour_confirm":
      // NOTE: 투어 확정
      return {
        first: props.first.userName,
        second: props.second.startDate,
        buttonText: null,
      };
    case "tour_done":
      // NOTE: 투어 완료
      return {
        first: props.first.userName,
        second: null,
        buttonText: null,
      };
    case "reservation_purchase_before":
      // NOTE: 결제 진행 중 (가상 계좌)
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: null,
      };
    case "reservation_purchase_done":
      // NOTE: 예악 확정 전
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: props.buttonText.expectedDate,
      };
    case "checkin_before":
      // NOTE: 체크인 전
      return {
        first: props.first.userName,
        second: props.second.startDate,
        buttonText: null,
      };
    case "day_n" ||
      "extend_purchase_before" ||
      "extend_purchase_done" ||
      "extend_checkin_before" ||
      "reservation_change_process":
      // NOTE: 입주 N일차 / 연장결제전 / 연장확정전/ 연장확정
      return {
        first: props.first.userName,
        second: props.second.endDate,
        buttonText: null,
      };
    case "checkout_before":
      // NOTE: 체크아웃 전
      return {
        first: props.first.userName,
        second: props.second.dDay,
        buttonText: null,
      };
    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      return {
        first: props.first.userName,
        second: props.second.dDay,
        buttonText: props.buttonText.endDate,
      };
    case "checkout_done":
      // NOTE: 체크아웃
      return {
        first: props.first.userName,
        second: props.second.hotelName,
        buttonText: null,
      };

    default:
      return {
        first: null,
        second: null,
        buttonText: null,
      };
  }
}
