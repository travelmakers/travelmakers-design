import { useEffect, useState } from "react";

export function getCountDown(date: string) {
  const INTERVAL_TIME = 1000;
  const TIMER_FORMAT = "HH시간 mm분"; //TODO: 국가에 따라 날짜 포멧 다르게 지정하도록 하는 로직 추가
  const [timeLeft, setTimeLeft] = useState<any>(null);

  const _vDate = new Date(date); // 전달 받은 일자
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const getTimeFormat = () => {
    if (!_vDate || !timeLeft) return "";
    return TIMER_FORMAT.replace("D", timeLeft.days)
      .replace("HH", timeLeft.hours)
      .replace("mm", timeLeft.minutes)
      .replace("ss", timeLeft.seconds);
  };

  const calculateTimeLeft = () => {
    const difference = new Date(_vDate).getTime() - new Date().getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / _day).toString(),
        hours: Math.floor((difference / _hour) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / _second / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / _second) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }
    setTimeLeft(timeLeft);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return getTimeFormat();
}
