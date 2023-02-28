import { getKorDate } from "../getDate";

export function getCountDown(date: string) {
  const TIMER_FORMAT = "HH시간 mm분";

  const _vDate = getKorDate(date); // 전달 받은 일자
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const getTimeFormat = () => {
    const difference =
      _vDate.toDate().getTime() - getKorDate().toDate().getTime();
    let timeLeft = {
      days: "0",
      hours: "0",
      minutes: "0",
      seconds: "0",
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / _day).toString(),
        hours: Math.floor((difference / _hour) % 24).toString(),
        minutes: Math.floor((difference / _second / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / _second) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    if (!_vDate || !timeLeft) return "";
    return TIMER_FORMAT.replace("D", timeLeft.days)
      .replace("HH", timeLeft.hours)
      .replace("mm", timeLeft.minutes)
      .replace("ss", timeLeft.seconds);
  };

  return getTimeFormat();
}
