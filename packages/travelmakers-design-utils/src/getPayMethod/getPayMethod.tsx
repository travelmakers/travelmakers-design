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
  const cardDescription = card_quota
    ? card_quota === 0
      ? "(일시불)"
      : "(" + card_quota + "개월 할부)"
    : "";
  switch (pay_method) {
    case "card":
      return `${card_name ?? "신용카드"}(${cardDescription})`;
    case "vbank":
      return `무통장입금 (가상계좌)`;
    case "naverpay":
      return `네이버페이${cardDescription}`;
    case "kakaopay":
      return `카카오페이${cardDescription}`;
    case "samsung":
      return `삼성페이${cardDescription}`;

    default:
      return "";
  }
};

export default getPayMethod;
