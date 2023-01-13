import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";

import { IconAngle } from "../../assets/icon";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./TimeLineBanner.style";

export type TimeLineBannerStylesNames = ClassNames<typeof useStyles>;

export interface TimeLineBannerProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** 해당 호텔에 대한 구매 상태를 의미합니다.
   * (구매전, 투어확정전, 투어확정, 투어완료, 결제진행중, 예약확정전, 체크인전, 입주n일차, 연장결제전, 연장확정전, 예약변경중, 체크아웃전, 체크아웃n일차, 체크아웃, 투어취소, 예약취소완료)
   */
  status: "default" | "alert";

  /** Title 텍스트를 지정한다. */
  title?: string;

  /** Message 텍스트를 지정한다. */
  message?: string;

  /** Label 텍스트를 지정한다. */
  label?: string;

  /** Label 우측에 표시되는 arrow 화살표 hidden 여부를 결정한다. */
  arrowHidden?: boolean;

  onClick?: () => void;

  onBannerClick?: () => void;
}

export const TimeLineBanner = forwardRef<HTMLDivElement, TimeLineBannerProps>(
  (
    {
      status,
      title = "&nbsp;",
      message = "&nbsp;",
      label = "&nbsp;",
      arrowHidden = false,
      onClick,
      onBannerClick,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { status, arrowHidden, isClick: !!onBannerClick },
      { overrideStyles, name: "TimeLineBanner" }
    );

    return (
      <>
        <View
          ref={ref}
          className={cx(classes.root, className)}
          co={co}
          onClick={onBannerClick}
          {...props}
        >
          <Typography
            family="Pretendard"
            level="b2"
            color={theme.colors.white}
            className={cx(classes.titleWrapper, classes.textMaxLength)}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </Typography>
          <div
            className={cx(classes.labelWrapper)}
            onClick={() => {
              if (!arrowHidden) onClick();
            }}
          >
            <Typography
              className={cx(classes.labelText, classes.textMaxLength)}
              family="Pretendard"
              level="b1"
              color={theme.colors.white}
              strong
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: label,
                }}
              />
            </Typography>
            {!arrowHidden && (
              <IconAngle
                className={cx(classes.arrowImage)}
                color={theme.colors.white}
              />
            )}
          </div>
          <div className={cx(classes.imageOval)} />
        </View>
        {props.children}
      </>
    );
  }
);

TimeLineBanner.displayName = "@travelmakers-design/core/TimeLineBanner";
