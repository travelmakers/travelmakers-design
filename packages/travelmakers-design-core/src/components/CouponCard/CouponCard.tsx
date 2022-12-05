import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./CouponCard.style";
import { Image } from "../Image";
import { IconCheck } from "../../assets/icon";

export type CouponCardStylesNames = ClassNames<typeof useStyles>;

export interface CouponCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** CouponCard 컴포넌트의 state를 판단합니다. */
  state?: "default" | "applied" | "checked";

  /** CouponCard 컴포넌트의 type을 판단합니다. */
  type?: "Week" | "Month" | "All";

  /** CouponCard 컴포넌트의 day를 표시합니다. (단, type이 All일 경우는 표시하지 않습니다.) */
  day?: number;

  /** CouponCard 컴포넌트의 할인률을 표시합니다. */
  saleMoney?: string;

  /** CouponCard 컴포넌트의 쿠폰명칭을 표시합니다. */
  couponName?: string;

  /** CouponCard 컴포넌트의 쿠폰 적용 상품을 표시합니다. */
  couponObject?: string;

  /** CouponCard 컴포넌트의 상세내용을 표시합니다. */
  description?: string;
}

export const CouponCard = forwardRef<HTMLDivElement, CouponCardProps>(
  (
    {
      state = "default",
      type = "Week",
      day = 1,
      saleMoney = "00",
      couponName,
      couponObject,
      description,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { state, type },
      { overrideStyles, name: "CouponCard" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.flex)}>
          <div className={cx(classes.labelContainer)}>
            {type !== "All" && (
              <Typography
                family="Noto Serif KR"
                level="h2"
                color={theme.colors.white}
                strong
              >
                {day}
              </Typography>
            )}
            <Typography
              family="Noto Serif KR"
              level={type !== "All" ? "b1" : "h2"}
              color={theme.colors.white}
            >
              {type}
            </Typography>
          </div>
          <div className={cx(classes.contentContainer)}>
            <div className={cx(classes.flex, classes.spaceBetween)}>
              <Typography
                family="Noto Serif KR"
                level="h6"
                color={theme.colors.green3}
                style={{ width: "fit-content", marginBottom: "4px" }}
                strong
              >
                {saleMoney}%
              </Typography>
              {state === "default" ? (
                <Typography
                  family="Pretendard"
                  level="b3"
                  color={theme.colors.navy3}
                  style={{ width: "fit-content" }}
                >
                  적용중
                </Typography>
              ) : (
                state === "applied" && <IconCheck />
              )}
            </div>
            <Typography
              family="Pretendard"
              level="b3"
              color={theme.colors.navy1}
            >
              {couponName}
            </Typography>
            <Typography
              family="Pretendard"
              level="caption"
              color={theme.colors.red3}
              style={{ width: "fit-content", marginBottom: "4px" }}
            >
              {couponObject}
            </Typography>
            <Typography
              family="Pretendard"
              level="caption"
              color={theme.colors.navy3}
            >
              {description}
            </Typography>
          </div>
        </div>
      </View>
    );
  }
);

CouponCard.displayName = "@travelmakers-design/core/CouponCard";
