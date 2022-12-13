/**
 * Date객체를 MM월DD일 형태로 표출
 * @param date 날짜객체
 * @param isHour 시분(HH:SS)을 표시해야 하는지 여부
 * @returns MM월DD일 HH:SS
 */
export function getTimeStamp(date: Date, isHour?: boolean) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const d = date;

  return isHour
    ? pad(d.getMonth() + 1) +
        "월 " +
        pad(d.getDate()) +
        "일 " +
        pad(d.getHours()) +
        ":" +
        pad(d.getMinutes())
    : pad(d.getMonth() + 1) + "월 " + pad(d.getDate()) + "일 ";
}

/**
 * Date객체를 MM월DD일 형태로 표출
 * @param date 날짜객체
 * @returns MM월DD일 HH시
 */
export function getTimeStampCheckIn(date: Date) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const d = date;

  return (
    pad(d.getMonth() + 1) +
    "월 " +
    pad(d.getDate()) +
    "일 " +
    pad(d.getHours()) +
    "시"
  );
}
