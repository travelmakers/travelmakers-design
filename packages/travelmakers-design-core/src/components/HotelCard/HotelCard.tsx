import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { HotelItems } from "../HotelItems";
import { HotelLabelType } from "../HotelLabelType";
import { IconTag } from "../IconTag";
import { Image } from "../Image";
import { Price } from "../Price";
import { Tag } from "../Tag";
import { Typography } from "../Typography";

import { View } from "../View";
import useStyles from "./HotelCard.style";

export type HotelCardStylesNames = ClassNames<typeof useStyles>;

export interface HotelCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** HotelCard 컴포넌트의 호텔타입을 정합니다. */
  type?: "default" | "hotel-mini" | "residence";

  /** HotelCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
  hotelItems?: string[];

  /** HotelCard 컴포넌트의 이미지 부분에 표시되는 주소를 표시합니다. */
  addressText?: string;

  /** HotelCard 컴포넌트의 호텔명을 표시합니다. */
  hotelName?: string;

  /** HotelCard 컴포넌트의 할인되는 퍼센트를 표시합니다. */
  percentText?: string;

  /** HotelCard 컴포넌트의 정가를 표시합니다. */
  beforePrice?: string;

  /** HotelCard 컴포넌트의 시작가를 표시합니다. */
  startPrice?: string;

  /** HotelCard 컴포넌트의 가격을 표시합니다. */
  priceText?: number;

  /** HotelCard 컴포넌트의 쿠폰여부를 정합니다. */
  couponBoolean?: boolean;

  /** HotelCard 컴포넌트의 쿠폰데이터를 가져옵니다. */
  coupons?: { coupon: { discounted: number } }[];

  /** HotelCard 컴포넌트의 몇주살기에 대한 레이블을 표시합니다. */
  timelineTags?: string[];
}

export const HotelCard = forwardRef<HTMLDivElement, HotelCardProps>(
  (
    {
      type = "default",
      hotelItems = [],
      addressText,
      hotelName,
      percentText,
      beforePrice,
      startPrice,
      priceText,
      couponBoolean = false,
      coupons,
      timelineTags,
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
      { overrideStyles, name: "HotelCard" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.cardContainer)}>
          <div className={cx(classes.imageWrapper)}>
            <div
              className={cx(
                classes.flexBox,
                classes.spaceBetweenBox,
                classes.groupLabel
              )}
            >
              <div className={cx(classes.flexBox)}>
                {hotelItems.map((item, index) => {
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
              <div className={cx(classes.addressBox)}>
                <Typography
                  family="Pretendard"
                  level="b1"
                  color={"rgba(255, 255, 255, 0.8)"}
                >
                  {addressText}
                </Typography>
              </div>
            </div>
            <Image
              className={cx(classes.image)}
              src={"https://picsum.photos/600/400"}
              height={"100%"}
            />
          </div>
          <div className={cx(classes.textWrapper)}>
            <Typography family="Pretendard" level="h4" mobileLevel="b2" strong>
              {hotelName}
            </Typography>
            <div className={cx(classes.flexBox, classes.imageBox)}>
              <HotelLabelType type={type} />
            </div>

            <div className={cx(classes.divider)} />

            <div className={cx(classes.flexBox, classes.labelBox)}>
              <Typography
                family="Pretendard"
                level="b3"
                className={cx(classes.label, classes.textNavy1)}
              >
                {percentText && "정가"}
              </Typography>
              <Typography
                family="Pretendard"
                level="b3"
                className={cx(classes.label, classes.textNavy1)}
              >
                {beforePrice}
              </Typography>
              {couponBoolean && <IconTag fill>쿠폰 적용가</IconTag>}
            </div>

            <div className={cx(classes.flexBox, classes.priceBox)}>
              <Price
                couponBool
                percentBool={!!percentText}
                priceBool={!!priceText}
                nightBool={false}
                percentText={percentText}
                priceStartBool={!!startPrice}
                priceStartText={startPrice}
                priceText={priceText}
                type="primary"
              />
            </div>

            <div className={cx(classes.flexBox, classes.tagBox)}>
              <HotelItems items={timelineTags} />
            </div>
          </div>
        </div>
      </View>
    );
  }
);

HotelCard.displayName = "@travelmakers-design/core/Header/Section";
