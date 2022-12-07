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
import { IconAngle } from "../../assets/icon";
import useStyles from "./TimeLineGuide.style";
import { Image } from "../Image";
import { Typography } from "../Typography";

export type TimeLineGuideStylesNames = ClassNames<typeof useStyles>;

export interface TimeLineGuideProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** 해당 호텔의 이름을 표시합니다. */
  hotelName: string;

  /** 호텔의 이름뒤에 문구를 표시합니다. */
  caption: string;

  onClick?: () => void;
}

export const TimeLineGuide = forwardRef<HTMLDivElement, TimeLineGuideProps>(
  (
    {
      hotelName = "서울 드래곤 시티",
      caption = "To do 추천",
      onClick,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
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
        onClick={onClick}
        {...props}
      >
        <View className={cx(classes.flex)}>
          <Image
            src={"https://picsum.photos/60/40"}
            className={cx(classes.image)}
            alt={"hotel-name"}
            width={60}
            height={60}
          />
          <Typography
            family="Pretendard"
            level="b3"
            color={theme.colors.navy1}
            className={cx(classes.description)}
          >
            {hotelName} <b>{caption}</b>
          </Typography>
        </View>
        <IconAngle
          className={cx(classes.arrowImage)}
          color={theme.colors.navy1}
        />
      </View>
    );
  }
);

TimeLineGuide.displayName = "@travelmakers-design/core/TimeLineGuide";
