import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React, { forwardRef, useState, useEffect } from "react";

import useStyles from "./Timer.style";
import { View } from "../View";
import { Image } from "../Image";

export type TimerStylesNames = ClassNames<typeof useStyles>;

export type TimerSize = "small" | "large";

export type TimerColor = "navy" | "white";

export interface TimerProps extends TmComponentProps<TimerStylesNames> {
  /** Timer 컴포넌트의 크기를 정합니다. */
  size?: TimerSize;

  /** Timer 컴포넌트의 색상을 정합니다. */
  color?: TimerColor;

  /** Timer 컴포넌트의 설명을 정합니다. */
  label?: string;

  /** Timer 컴포넌트의 타이머가 끝나는 시간을 정합니다. */
  endAt?: Date;
}

const INTERVAL_TIME = 1000;
const TIMER_FORMAT = "D일 HH : mm : ss"; //TODO: 국가에 따라 날짜 포멧 다르게 지정하도록 하는 로직 추가

export const Timer = forwardRef<HTMLDivElement, TimerProps>(
  (
    {
      size = "small",
      color = "navy",
      label = "타임세일 워딩",
      endAt = new Date(),
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const { classes, cx } = useStyles(
      { size, color },
      { overrideStyles, name: "span" }
    );
    const [timeLeft, setTimeLeft] = useState<any>(null);

    const getTimeFormat = () => {
      if (!endAt || !timeLeft) return "";
      return TIMER_FORMAT.replace("D", timeLeft.days)
        .replace("HH", timeLeft.hours)
        .replace("mm", timeLeft.minutes)
        .replace("ss", timeLeft.seconds);
    };

    const calculateTimeLeft = () => {
      const difference = new Date(endAt).getTime() - new Date().getTime();

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, "0"),
          minutes: Math.floor((difference / 1000 / 60) % 60)
            .toString()
            .padStart(2, "0"),
          seconds: Math.floor((difference / 1000) % 60)
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

    return (
      <View
        ref={ref}
        className={cx(classes.container, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.labelContainer)}>
          <Image
            src={
              color === "navy"
                ? require("../../assets/svg/ic-timesale-navy.svg")
                : require("../../assets/svg/ic-timesale-white.svg")
            }
            className={cx(classes.icon)}
            alt="timer"
          />
          <div className={cx(classes.label)}>{label}</div>
        </div>
        <div className={cx(classes.timer)}>{getTimeFormat()}</div>
      </View>
    );
  }
);

Timer.displayName = "@travelmakers-design/core/Timer";
