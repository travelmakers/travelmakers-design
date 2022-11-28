import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { Tag } from "../Tag";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./CarouselTitleCard.style";

export type CarouselTitleCardStylesNames = ClassNames<typeof useStyles>;

export interface CarouselTitleCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** CarouselTitleCard 컴포넌트의 newBadge 여부를 판단합니다. */
  newBadge?: boolean;

  /** CarouselTitleCard 컴포넌트의 서브헤드라인을 표시합니다. */
  subHeadline?: string;

  /** CarouselTitleCard 컴포넌트의 헤드라인을 표시합니다. */
  headline?: string;

  /** CarouselTitleCard 컴포넌트의 디스크립션을 표시합니다. */
  description?: string;
}

export const CarouselTitleCard = forwardRef<
  HTMLDivElement,
  CarouselTitleCardProps
>(
  (
    {
      newBadge = false,
      subHeadline,
      headline,
      description,
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
      { overrideStyles, name: "CarouselTitleCard" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        {newBadge && (
          <div className={cx(classes.newBadge)}>
            <Typography
              family="PT Serif"
              level="h4"
              mobileLevel="h6"
              color={theme.colors.white}
              textAlign={"center"}
              style={{ width: "100%" }}
            >
              New
            </Typography>
          </div>
        )}
        <div className={cx(classes.headlineWrapper)}>
          <Typography
            family="Noto Serif KR"
            level="h6"
            mobileLevel="b3"
            color={theme.colors.navy1}
            className={cx(classes.subHeadline)}
          >
            {subHeadline}
          </Typography>
          <Typography
            family="Noto Serif KR"
            level="h2"
            mobileLevel="h6"
            color={theme.colors.navy1}
            className={cx(classes.headline)}
            strong
          >
            {headline}
          </Typography>
          <Typography
            family="Pretendard"
            level="h6"
            mobileLevel="b3"
            color={theme.colors.green3}
            className={cx(classes.description)}
            strong
          >
            {description}
          </Typography>
        </div>
      </View>
    );
  }
);

CarouselTitleCard.displayName = "@travelmakers-design/core/CarouselTitleCard";
