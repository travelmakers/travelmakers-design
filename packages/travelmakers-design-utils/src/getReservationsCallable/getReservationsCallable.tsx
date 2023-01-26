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
   * 연장정보 callable 여부
   */
  extensionInfo: {
    visible: boolean;
    callable: boolean;
  };
  /**
   * 연장기한안내정보 callable 여부
   */
  extensionGuideInfo: {
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
   * 결제환불정보 callable 여부
   */
  paymentRefundInfo: {
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
  /**
   * 예약변경 취소버튼 callable 여부
   */
  reservationChangeButton: {
    visible: boolean;
    callable: boolean;
  };
}

// TODO: 예약취소완료, 환불처리중, 환불완료
/**
 * 상태에 따른 box callable,visible 여부를 호출한다.
 * @param state
 * @returns
 */
export function getReservationsCallable(state: ReservationState): returnType {
  switch (state) {
    case "checkout_done":
      // NOTE: 체크아웃 N일전
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
        },
        tenantInfo: {
          visible: true,
          callable: false,
        },
        paymentInfo: {
          visible: true,
          callable: true,
        },
        refundBox: {
          visible: false,
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };
    case "checkout_before":
      // NOTE: 체크아웃 전
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: true,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
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
          visible: false,
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };
    case "reservation_purchase_before":
    case "reservation_purchase_done":
    case "checkin_before":
      // NOTE: 결제진행중
      // 결제 진행 중, 예약 확정 전, 체크인 전
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: true,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
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
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: true,
          callable: true,
        },
      };

    case "day_n":
      // NOTE: 입주 중
      // 입주 NN일차
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: true,
          callable: true,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
        },
        tenantInfo: {
          visible: true,
          callable: false,
        },
        paymentInfo: {
          visible: true,
          callable: true,
        },
        refundBox: {
          visible: false,
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };

    case "extend_purchase_before":
    case "extend_purchase_done":
      // NOTE: 연장 결제 전, 연장 확정 전
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: true,
          callable: true,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
        },
        tenantInfo: {
          visible: true,
          callable: false,
        },
        paymentInfo: {
          visible: true,
          callable: true,
        },
        refundBox: {
          visible: true,
          callable: true,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: true,
          callable: true,
        },
      };

    case "extend_checkin_before":
      // NOTE: 연장 확정
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: true,
          callable: true,
        },
        extensionGuideInfo: {
          visible: true,
          callable: true,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
        },
        tenantInfo: {
          visible: true,
          callable: false,
        },
        paymentInfo: {
          visible: true,
          callable: true,
        },
        refundBox: {
          visible: true,
          callable: true,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: true,
          callable: true,
        },
      };

    case "reservation_change_process":
      // NOTE: 예약 변경 중
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: true,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
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
          visible: false,
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };

    case "checkout_before":
      // NOTE: 체크아웃 전
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: true,
          callable: true,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
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
          visible: false,
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };

    case "checkout_before_n":
      // NOTE: 체크아웃 N일 전
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
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
          visible: false,
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };

    case "reservation_cancel":
      // NOTE: 예약 취소 중
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
        },
        customerInfo: {
          visible: true,
          callable: false,
        },
        tenantHopeInfo: {
          visible: false,
          callable: false,
        },
        tenantInfo: {
          visible: true,
          callable: false,
        },
        paymentInfo: {
          visible: true,
          callable: false,
        },
        refundBox: {
          visible: true,
          callable: true,
        },
        paymentRefundInfo: {
          visible: true,
          callable: true,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };

    case "tour_confirm_before":
    case "tour_confirm":
      // NOTE: 투어관련
      return {
        reservationInfo: {
          type: "tour",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
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
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: true,
          callable: true,
        },
      };
    case "tour_cancel":
    case "tour_done":
      // NOTE: 투어관련
      return {
        reservationInfo: {
          type: "tour",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
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
          callable: false,
        },
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };

    default:
      return {
        reservationInfo: {
          type: "payment",
          visible: true,
          callable: true,
        },
        extensionInfo: {
          visible: false,
          callable: false,
        },
        extensionGuideInfo: {
          visible: false,
          callable: false,
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
        paymentRefundInfo: {
          visible: false,
          callable: false,
        },
        reservationChangeButton: {
          visible: false,
          callable: false,
        },
      };
  }
}

export default getReservationsCallable;
