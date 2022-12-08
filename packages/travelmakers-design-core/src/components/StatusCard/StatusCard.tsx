import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import { Image } from "../Image";
import React, { forwardRef, useState } from "react";
import { Typography } from "../Typography";
import { IconAngle } from "../../assets/icon";
import { View } from "../View";
import useStyles from "./StatusCard.style";
import { getTimeStamp } from "../../utils";
export type StatusCardStylesNames = ClassNames<typeof useStyles>;

export interface StatusCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** 해당 호텔에 대한 구매 상태를 의미합니다.
   * (구매전, 투어확정전, 투어확정, 투어완료, 결제진행중, 예약확정전, 체크인전, 입주n일차, 연장결제전, 연장확정전, 예약변경중, 체크아웃전, 체크아웃n일차, 체크아웃, 투어취소, 예약취소완료)
   */
  status: "default" | "alert";

  /** Title 텍스트를 지정한다. */
  title: string;

  /** 정해진 일시에 대한 Date 객체 */
  contentDate?: Date;

  /** Message 텍스트를 지정한다. */
  message: string;

  /** Label 텍스트를 지정한다. */
  label: string;

  onClick?: () => void;
}

export const StatusCard = forwardRef<HTMLDivElement, StatusCardProps>(
  (
    {
      status,
      title,
      contentDate = new Date(),
      message,
      label,
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
      { status },
      { overrideStyles, name: "StatusCard" }
    );

    return (
      <>
        <View
          ref={ref}
          className={cx(classes.root, className)}
          co={co}
          {...props}
        >
          <View className={cx(classes.container)}>
            <Image
              src={"https://picsum.photos/60/40"}
              className={cx(classes.image)}
              alt={"hotel-name"}
              width={98}
              height={98}
            />
            <View className={cx(classes.textContainer)}>
              <Typography
                family="Pretendard"
                level="b2"
                color={theme.colors.navy1}
                strong
              >
                투어 확정 전
              </Typography>
              <Typography
                family="Pretendard"
                level="b3"
                color={theme.colors.navy1}
                strong
              >
                {getTimeStamp(contentDate, false)} 이내 확정 예정
              </Typography>
              <Typography
                family="Pretendard"
                level="b3"
                color={theme.colors.navy1}
                className={cx(classes.description, classes.textBreak)}
              >
                서울 드래곤 시티 - 이비스 스타일 앰배서더 서울 용산
              </Typography>
              <View
                className={cx(
                  classes.flex,
                  classes.spaceBetween,
                  classes.footerWrapper
                )}
              >
                <Typography
                  family="Pretendard"
                  level="b3"
                  color={theme.colors.navy2}
                  className={cx(classes.footer, classes.textBreak)}
                >
                  한달살기・슈페리어 디럭스 트윈
                </Typography>
                <IconAngle
                  className={cx(classes.arrowImage)}
                  color={theme.colors.navy1}
                />
              </View>
            </View>
          </View>
          {props.children}
        </View>
      </>
    );
  }
);

StatusCard.displayName = "@travelmakers-design/core/StatusCard";
