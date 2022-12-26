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

interface returnType {
  /**
   * 예약정보 callable 여부
   */
  reservationInfo: {
    type: "payment" | "tour";
    visible: boolean;
    callable: boolean;
  };
  /**
   * 예약자정보 callable 여부
   */
  customerInfo: {
    visible: boolean;
    callable: boolean;
  };
  /**
   * 입주희망정보 callable 여부
   */
  tenantHopeInfo: {
    visible: boolean;
    callable: boolean;
  };
  /**
   * 입주자정보 callable 여부
   */
  tenantInfo: {
    visible: boolean;
    callable: boolean;
  };
  /**
   * 결제정보 callable 여부
   */
  paymentInfo: {
    visible: boolean;
    callable: boolean;
  };
  /**
   * 환불규정 callable 여부
   */
  refundBox: {
    visible: boolean;
    callable: boolean;
  };
}

/**
구매 전	 default
투어 확정 전	tour_confirm_before
투어 확정 	tour_confirm
투어 완료	tour_done
결제 진행 중 	reservation_purchase_before
연장 결제 전 	extend_purchase_before
예약 확정 전	reservation_purchase_done
체크인 전	checkin_before
입주 1일차	day_1
입주 N일차	day_n
체크아웃 전	checkout_before
체크아웃	checkout_done

결제 진행 중 	reservation_purchase_before
예약 확정 전	reservation_purchase_done
예약 변경 중	reservation_change_process
호텔 이용 중	day_n
연장 확정 전	extend_purchase_done
연장 확정	extend_checkin_before
체크아웃 D-0	checkout_before_n
 */

export function getReservationsCallable(state: ReservationState): returnType {
  switch (state) {
    case "reservation_purchase_before" ||
      "reservation_purchase_done" ||
      "checkin_before" ||
      "day_n" ||
      "checkout_before" ||
      "checkout_done":
      // NOTE: 결제진행중
      // 결제 진행 중, 예약 확정 전, 체크인 전, 입주 NN일차, 체크아웃 전, 체크아웃
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        customerInfo: {
          visible: true,
          callable: true,
        },
        tenantHopeInfo: {
          visible: false,
          callable: true,
        },
        tenantInfo: {
          visible: true,
          callable: true,
        },
        paymentInfo: {
          visible: true,
          callable: true,
        },
        refundBox: {
          visible: true,
          callable: true,
        },
      };

    case "tour_confirm_before" ||
      "tour_confirm" ||
      "tour_done" ||
      "tour_cancel":
      // NOTE: 투어관련
      return {
        reservationInfo: {
          type: "tour",
          visible: true,
          callable: true,
        },
        customerInfo: {
          visible: true,
          callable: true,
        },
        tenantHopeInfo: {
          visible: true,
          callable: true,
        },
        tenantInfo: {
          visible: false,
          callable: true,
        },
        paymentInfo: {
          visible: false,
          callable: true,
        },
        refundBox: {
          visible: false,
          callable: true,
        },
      };
    default:
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        customerInfo: {
          visible: true,
          callable: true,
        },
        tenantHopeInfo: {
          visible: false,
          callable: true,
        },
        tenantInfo: {
          visible: true,
          callable: true,
        },
        paymentInfo: {
          visible: true,
          callable: true,
        },
        refundBox: {
          visible: true,
          callable: true,
        },
      };
  }
}

export default getReservationsCallable;
