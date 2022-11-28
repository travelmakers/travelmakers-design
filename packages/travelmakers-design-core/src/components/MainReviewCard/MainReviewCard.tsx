import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";
import { Image } from "../Image";
import { Typography } from "../Typography";

import { View } from "../View";
import useStyles from "./MainReviewCard.style";

export type MainReviewCardStylesNames = ClassNames<typeof useStyles>;

export interface MainReviewCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** MainReviewCard 컴포넌트의 이미지를 표시합니다. */
  image?: string;

  /** MainReviewCard 컴포넌트의 title 표시합니다. */
  title?: string;

  /** MainReviewCard 컴포넌트의 job 표시합니다. */
  job?: string;

  /** MainReviewCard 컴포넌트의 description 표시합니다. */
  description?: string;
}

export const MainReviewCard = forwardRef<HTMLDivElement, MainReviewCardProps>(
  (
    { image, title, job, description, className, co, overrideStyles, ...props },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      {},
      { overrideStyles, name: "MainReviewCard" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.reviewContainer)}>
          <Image className={cx(classes.reviewImage)} src={image} />
          <div className={cx(classes.descriptionWrapper)}>
            <Typography
              family="Pretendard"
              level="b3"
              color={theme.colors.green2}
            >
              {title}
            </Typography>
            <Typography
              family="Pretendard"
              level="b2"
              color={theme.colors.navy2}
              className={cx(classes.descriptionJob)}
            >
              {job}
            </Typography>
            <Typography
              family="Pretendard"
              level="b2"
              color={theme.colors.navy1}
            >
              {description}
            </Typography>
          </div>
        </div>
      </View>
    );
  }
);

MainReviewCard.displayName = "@travelmakers-design/core/MainReviewCard";
