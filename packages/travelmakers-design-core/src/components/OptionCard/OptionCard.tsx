import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, MouseEventHandler } from "react";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./OptionCard.style";
import { Image } from "../Image";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { IconTag } from "../IconTag";
import { IconAngle } from "../../assets/icon";

export type OptionCardStylesNames = ClassNames<typeof useStyles>;

export interface OptionCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** OptionCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
  labelItems?: string[];

  /** OptionCard 컴포넌트의 상단 Title Name을 표시합니다. */
  headTitle?: string;

  /** OptionCard 컴포넌트의 하단 Title Name을 표시합니다. */
  footerTitle?: string;

  /** OptionCard 컴포넌트의 Price 표시여부를 판단합니다. */
  isPrice?: boolean;

  /** OptionCard 컴포넌트의 Label 표시여부를 판단합니다. */
  isLabel?: boolean;

  /** OptionCard 컴포넌트의 Duration 표시여부를 판단합니다. */
  isDuration?: boolean;

  /** OptionCard 컴포넌트의 optionName을 표사합니다. */
  optionName?: string;

  /** OptionCard 컴포넌트의 최소 -박(night)을 표사합니다. */
  minNight?: number;

  /** OptionCard 컴포넌트의 최대 -박(night)을 표사합니다. */
  maxNight?: number;

  /** OptionCard 컴포넌트의 roomType을 표사합니다. */
  roomType?: string;

  /** OptionCard 컴포넌트의 benefitContent을 표사합니다. */
  benefitContent?: string;

  /** OptionCard 컴포넌트의 salePercent을 표사합니다. */
  salePercent?: number;

  /** OptionCard 컴포넌트의 price(정가)을 표사합니다. */
  price?: number;

  /** OptionCard 컴포넌트의 salePrice(할인된 가격)을 표사합니다. */
  salePrice?: number;

  /** OptionCard 컴포넌트의 buttonName을 표시합니다. */
  buttonName?: string;

  buttonClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OptionCard = forwardRef<HTMLDivElement, OptionCardProps>(
  (
    {
      labelItems = ["111", "222"],
      isPrice = true,
      isLabel = true,
      isDuration = true,
      headTitle = "Room Type",
      footerTitle = "Benefit",
      optionName = "옵션 설명",
      minNight = 0,
      maxNight = 0,
      price = 0,
      salePrice = 0,
      salePercent = 0,
      roomType,
      benefitContent = "혜택 설명을 입력하세요<br /> 혜택 설명을 입력하세요<br /> 혜택 설명을 입력하세요<br />",
      buttonName = "버튼",
      buttonClick,
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
      { overrideStyles, name: "OptionCard" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.container)}>
          <div className={cx(classes.flex, classes.labelWrapper)}>
            {isLabel &&
              labelItems.map((item, index) => {
                return (
                  <Tag
                    color={
                      (index + 1) % 2 === 0
                        ? "blue"
                        : (index + 1) % 3 === 0
                        ? "purple"
                        : "green"
                    }
                    fill
                    size="medium"
                    className={cx(classes.individualLabel)}
                  >
                    {item}
                  </Tag>
                );
              })}
          </div>
          <div className={cx(classes.flex, classes.optionWrapper)}>
            <Typography
              family="Pretendard"
              level="h5"
              color={theme.colors.navy1}
              className={cx(classes.optionText)}
              strong
            >
              {optionName}
            </Typography>
            {isDuration && (
              <Typography
                family="Pretendard"
                level="b2"
                color={theme.colors.navy1}
              >
                ({minNight}박 - {maxNight}박)
              </Typography>
            )}
          </div>
          <Typography
            family="Pretendard"
            level="b2"
            color={theme.colors.navy1}
            strong
          >
            {headTitle}
          </Typography>
          <div className={cx(classes.divider)} />
          <Typography
            family="Pretendard"
            level="b2"
            color={theme.colors.navy2}
            style={{ height: "40px" }}
          >
            {roomType}
          </Typography>
          <div className={cx(classes.flex, classes.spaceBetween)}>
            <Typography
              family="Pretendard"
              level="b2"
              color={theme.colors.navy1}
              style={{ width: "fit-content" }}
              strong
            >
              {footerTitle}
            </Typography>
            <div className={cx(classes.flex)}>
              <Typography
                family="Pretendard"
                level="b3"
                color={theme.colors.navy1}
                style={{ width: "fit-content", marginRight: "3px" }}
              >
                더보기
              </Typography>
              <IconAngle className={cx(classes.arrowImage)} />
            </div>
          </div>

          {isPrice && (
            <>
              <div className={cx(classes.divider)} />
              <Typography
                family="Pretendard"
                level="b2"
                color={theme.colors.navy1}
                style={{ width: "fit-content", height: "100px" }}
              >
                <div dangerouslySetInnerHTML={{ __html: benefitContent }} />
              </Typography>

              <div
                className={cx(classes.divider)}
                style={{
                  margin: "16px 0 12px 0",
                }}
              />
              <div
                className={cx(
                  classes.flex,
                  classes.spaceBetween,
                  classes.couponWrapper
                )}
              >
                <IconTag fill>쿠폰 적용가</IconTag>
                <div className={cx(classes.flex)}>
                  <Typography
                    family="Pretendard"
                    level="b3"
                    color={theme.colors.navy1}
                    style={{
                      width: "fit-content",
                      flexShrink: 0,
                      marginRight: "4px",
                    }}
                  >
                    정가
                  </Typography>
                  <Typography
                    family="Pretendard"
                    level="b3"
                    color={theme.colors.gray2}
                    style={{
                      width: "fit-content",
                      flexShrink: 0,
                      textDecorationLine: "line-through",
                    }}
                  >
                    {new Intl.NumberFormat("ko-KR").format(price)}원
                  </Typography>
                </div>
              </div>
              <div className={cx(classes.flex, classes.spaceBetween)}>
                <Typography
                  family="Pretendard"
                  level="h6"
                  color={theme.colors.red2}
                  style={{
                    width: "fit-content",
                    flexShrink: 0,
                  }}
                  strong
                >
                  {salePercent}%
                </Typography>
                <div className={cx(classes.flex)}>
                  <Typography
                    family="Pretendard"
                    level="h4"
                    color={theme.colors.navy1}
                    style={{
                      width: "fit-content",
                      flexShrink: 0,
                    }}
                    strong
                  >
                    {new Intl.NumberFormat("ko-KR").format(salePrice)}
                  </Typography>
                  <Typography
                    family="Pretendard"
                    level="b2"
                    color={theme.colors.navy1}
                    style={{
                      width: "fit-content",
                      flexShrink: 0,
                    }}
                    strong
                  >
                    원~
                  </Typography>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={cx(classes.footer)}>
          <Button fullWidth onClick={buttonClick}>
            {buttonName}
          </Button>
        </div>
      </View>
    );
  }
);

OptionCard.displayName = "@travelmakers-design/core/OptionCard";
