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

  /** HotelCard 컴포넌트의 이미지를 표시합니다. */
  hotelImage?: string;
  
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

  /** HotelCard 컴포넌트의 판매가능 여부를 표시합니다. */
  soldOut?: boolean;
}

export const HotelCard = forwardRef<HTMLDivElement, HotelCardProps>(
  (
    {
      type = "default",
      hotelImage,
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
      soldOut = false,
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

    const SaleTextBox = () => (
      <>
        <div className={cx(classes.flexBox, classes.labelBox)}>
          <Typography
            family="Pretendard"
            level="b3"
            color={theme.colors.navy1}
            className={cx(classes.label, classes.textNavy1)}
          >
            {percentText && "정가"}
          </Typography>
          <Typography
            family="Pretendard"
            level="b3"
            color={theme.colors.navy1}
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
      </>
    );

    const SoldOutBox = () => (
      <div className={cx(classes.sellout)}>
        <Typography
          family="Pretendard"
          level="b2"
          color={theme.colors.gray4}
          className={cx(classes.label)}
        >
          판매가 완료되었습니다.
        </Typography>
      </div>
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.cardContainer)}>
          {/* SECTION: imageWrapper */}
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
            <div className={cx(classes.cardImageBox)}>
              <Image
                className={cx(classes.image)}
                src={hotelImage}
                height={"100%"}
              >
                {soldOut && (
                  <div className={cx(classes.soldOutBox)}>
                    <b>Sold Out</b>
                    <small>다음에 만나요</small>
                  </div>
                )}
              </Image>
            </div>
          </div>

          {/* SECTION: textWrapper */}
          <div className={cx(classes.textWrapper)}>
            <Typography
              family="Pretendard"
              level="h4"
              mobileLevel="b2"
              color={soldOut ? theme.colors.gray4 : theme.colors.navy1}
              strong
            >
              {hotelName}
            </Typography>
            <div className={cx(classes.flexBox, classes.labelImageBox)}>
              <HotelLabelType type={type} soldOut={soldOut} />
            </div>

            <div className={cx(classes.divider)} />

            {soldOut ? <SoldOutBox /> : <SaleTextBox />}

            <div className={cx(classes.flexBox, classes.tagBox)}>
              <HotelItems items={timelineTags} soldOut={soldOut} />
            </div>
          </div>
        </div>
      </View>
    );
  }
);

HotelCard.displayName = "@travelmakers-design/core/Header/Section";
