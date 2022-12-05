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

import { HotelItems } from "../HotelItems";
import { Image } from "../Image";
import { Indicator } from "../Indicator";
import { Typography } from "../Typography";

import { View } from "../View";
import useStyles from "./HotelReviewCard.style";

export type HotelReviewCardStylesNames = ClassNames<typeof useStyles>;

export interface HotelReviewCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** HotelReviewCard 컴포넌트의 이미지를 표시합니다. */
  hotelImage?: string;

  /** HotelReviewCard 컴포넌트의 레이블을 표시합니다. */
  tags?: string[];

  /** HotelReviewCard 컴포넌트의 내용을 표시합니다. */
  content?: string;

  /** HotelReviewCard 컴포넌트의 리뷰어 이름을 표시합니다. */
  reviewName?: string;

  /** HotelReviewCard 컴포넌트의 상품옵션을 표시합니다. */
  hotelOption?: string;
}

export const HotelReviewCard = forwardRef<HTMLDivElement, HotelReviewCardProps>(
  (
    {
      hotelImage,
      tags,
      content,
      reviewName,
      hotelOption,
      title,
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
      { overrideStyles, name: "HotelReviewCard" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.contentWrapper)}>
          <div className={cx(classes.headerBox)}>
            <Typography
              family="Pretendard"
              level="b3"
              color={theme.colors.navy3}
              className={cx(classes.text)}
            >
              이런 점이 좋았어요.
            </Typography>
            <IconAngle className={cx(classes.arrowImage)} />
          </div>
          <HotelItems items={tags} fill className={cx(classes.tagList)} />
          <div className={cx(classes.contentBox)}>
            <Typography
              family="Pretendard"
              level="b1"
              color={theme.colors.navy3}
              className={cx(classes.content)}
            >
              {content}
            </Typography>
            <div className={cx(classes.mobileImageWrapper)}>
              <Image src={hotelImage} width={40} height={40} />
            </div>
          </div>
          <div className={cx(classes.divider)} />
          <div>
            <Typography
              family="Pretendard"
              level="b3"
              color={theme.colors.navy1}
            >
              {reviewName}님의 리뷰
              {hotelOption && (
                <span style={{ color: theme.colors.navy3, marginLeft: "9px" }}>
                  상품 옵션 : {hotelOption}
                </span>
              )}
            </Typography>
          </div>
        </div>
        <div className={cx(classes.image, classes.imageWrapper)}>
          <Image src={hotelImage} width={145} height={145} />
        </div>
      </View>
    );
  }
);

HotelReviewCard.displayName = "@travelmakers-design/core/HotelReviewCard";
