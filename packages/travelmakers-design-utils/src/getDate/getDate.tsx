/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(/)
 * @returns YYYY/MM/DD
 */
export function getDate(date: string, separators?: string) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const d = new Date(date);
  const separator = separators ?? "/";

  return (
    pad(d.getFullYear()) +
    separator +
    pad(d.getMonth() + 1) +
    separator +
    pad(d.getDate())
  );
}

/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(/)
 * @returns YYYY/MM/DD HH:MM
 */
export function getFullDate(date: string, separators?: string) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const d = new Date(date);
  const separator = separators ?? "/";

  return (
    pad(d.getFullYear()) +
    separator +
    pad(d.getMonth() + 1) +
    separator +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes())
  );
}

/**
 * Date객체를 YYYY/MM/DD 형태로 표출
 * @param date 날짜객체
 * @param separators 구분좌(:)
 * @returns HH:MM
 */
export function getDateTime(date: string, separators?: string) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  const d = new Date(date);
  const separator = separators ?? ":";

  return pad(d.getHours()) + separator + pad(d.getMinutes());
}
