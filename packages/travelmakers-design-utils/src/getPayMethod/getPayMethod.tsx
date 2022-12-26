/**
 * 결제방법에 대해서 문자열로 리턴한다.
 * @param pay_method
 * @returns string
 */
const getPayMethod = (pay_method: string) => {
  switch (pay_method) {
    case "card":
      return "신용카드";
    case "vbank":
      return "무통장입금 (가상계좌)";
    case "naverpay":
      return "네이버페이";
    case "kakaopay":
      return "카카오페이";
    case "samsung":
      return "삼성페이";

    default:
      return "";
  }
};

export default getPayMethod;
