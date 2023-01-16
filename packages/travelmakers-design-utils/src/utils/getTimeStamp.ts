function pad(n) {
  return n < 10 ? "0" + n : n;
}
/**
 * Date객체를 MM월DD일 형태로 표출
 * @param date 날짜객체
 * @param isHour 시분(HH:SS)을 표시해야 하는지 여부
 * @returns MM월DD일 HH:SS
 */
export function getTimeStamp(date: Date, isHour?: boolean) {
  const d = date;

  return isHour
    ? d.getMonth() +
        1 +
        "월 " +
        d.getDate() +
        "일 " +
        d.getHours() +
        ":" +
        pad(d.getMinutes())
    : d.getMonth() + 1 + "월 " + d.getDate() + "일 ";
}

/**
 * Date객체를 MM월DD일 형태로 표출
 * @param date 날짜객체
 * @returns MM월DD일 HH시
 */
export function getTimeStampCheckIn(date: Date) {
  const d = date;

  return d.getMonth() + 1 + "월 " + d.getDate() + "일 " + d.getHours() + "시";
}
