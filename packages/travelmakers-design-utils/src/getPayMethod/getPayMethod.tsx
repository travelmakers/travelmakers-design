/**
 * 결제방법에 대해서 문자열로 리턴한다.
 * @param pay_method
 * @returns string
 */
const getPayMethod = (
  pay_method: string,
  card_name?: string,
  card_quota?: number
) => {
  const getCardDescription = () => {
    if (card_quota === 0) {
      return "(일시불)";
    } else if (card_quota > 0) {
      return "(" + card_quota + "개월 할부)";
    }
    return "";
  };

  switch (pay_method) {
    case "card":
      return `${card_name ?? "신용카드"}${getCardDescription()}`;
    case "vbank":
      return `무통장입금 (가상계좌)`;
    case "naverpay":
      return `네이버페이${getCardDescription()}`;
    case "kakaopay":
      return `카카오페이${getCardDescription()}`;
    case "samsung":
      return `삼성페이${getCardDescription()}`;

    default:
      return "";
  }
};

export default getPayMethod;
