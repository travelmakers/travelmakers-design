import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";

import { View } from "../View";
import useStyles from "./TimeLineGuide.style";

export type TimeLineGuideStylesNames = ClassNames<typeof useStyles>;

export interface TimeLineGuideProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** 해당 호텔에 대한 구매 상태를 의미합니다.
   * (구매전, 투어확정전, 투어확정, 투어완료, 결제진행중, 예약확정전, 체크인전, 입주n일차, 연장결제전, 연장확정전, 예약변경중, 체크아웃전, 체크아웃n일차, 체크아웃, 투어취소, 예약취소완료)
   */
  status: string;
}

export const TimeLineGuide = forwardRef<HTMLDivElement, TimeLineGuideProps>(
  ({ className, co, overrideStyles, ...props }, ref) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      {},
      { overrideStyles, name: "TimeLineGuide" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      ></View>
    );
  }
);

TimeLineGuide.displayName = "@travelmakers-design/core/TimeLineGuide";
