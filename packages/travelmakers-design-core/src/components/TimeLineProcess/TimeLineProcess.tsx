import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";

import { IconProcess } from "../../assets/icon";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./TimeLineProcess.style";

export type TimeLineProcessStylesNames = ClassNames<typeof useStyles>;

export interface TimeLineProcessProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /**
   * 결제 프로세스 상태값을 반환합니다.
   */
  status:
    | "reservation_purchase_before"
    | "extend_purchase_before"
    | "extend_purchase_done"
    | "reservation_purchase_done";

  /**
   * 결제 프로세스의 타입을 반환합니다.
   */
  type?: "primary" | "secondary";
}

export const TimeLineProcess = forwardRef<HTMLDivElement, TimeLineProcessProps>(
  (
    { status, type = "primary", className, co, overrideStyles, ...props },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      {},
      { overrideStyles, name: "TimeLineProcess" }
    );

    const process = [
      {
        text: "결제 대기",
        isProcess:
          (status === "reservation_purchase_before" ||
            status === "extend_purchase_before") &&
          true,
      },
      {
        text: "결제 완료",
        isProcess: false,
      },
      {
        text: "<b style='font-weight: 600'>호텔에삶</b><br/>예약 전달",
        isProcess:
          (status === "reservation_purchase_done" ||
            status === "extend_purchase_done") &&
          true,
      },
      {
        text: "<b style='font-weight: 600'>호텔</b><br/>예약 확정",
        isProcess: false,
      },
    ];

    if (type === "secondary") {
      // NOTE: 결제대기 제거
      process.shift();
    }

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        {process.map(({ text, isProcess }, index) => {
          return (
            <>
              <Typography
                family="Pretendard"
                level="b3"
                textAlign="center"
                className={cx(classes.text, isProcess && classes.process)}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                />
              </Typography>
              {index !== process.length - 1 && (
                <View className={cx(classes.flex)}>
                  <IconProcess process={isProcess} />
                </View>
              )}
            </>
          );
        })}
      </View>
    );
  }
);

TimeLineProcess.displayName = "@travelmakers-design/core/TimeLineProcess";
