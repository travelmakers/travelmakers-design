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
import { Image } from "../Image";
import { Typography } from "../Typography";
import { View } from "../View";
import { getTimeStamp } from "../../utils";
import useStyles from "./StatusCard.style";

export type StatusCardStylesNames = ClassNames<typeof useStyles>;

export interface StatusCardProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Title 텍스트를 지정한다. */
  title: string;

  /**  */
  hotelImage?: string;

  /** Message 텍스트를 지정한다. */
  message: string;

  /** Label 텍스트를 지정한다. */
  label: string;

  roomType: string;

  onClick?: () => void;

  isArrow?: boolean;
}

export const StatusCard = forwardRef<HTMLDivElement, StatusCardProps>(
  (
    {
      hotelImage,
      title,
      message,
      label,
      roomType,
      onClick,
      isArrow = true,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { isArrow },
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
          <View className={cx(classes.container)} onClick={onClick}>
            <Image
              src={hotelImage}
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
                {title}
              </Typography>
              <Typography
                family="Pretendard"
                level="b3"
                color={theme.colors.navy1}
                strong
              >
                {message}
              </Typography>
              <Typography
                family="Pretendard"
                level="b3"
                color={theme.colors.navy1}
                className={cx(classes.description, classes.textBreak)}
              >
                {label}
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
                  {roomType}
                </Typography>
                {isArrow ? (
                  <IconAngle
                    className={cx(classes.arrowImage)}
                    color={theme.colors.navy1}
                  />
                ) : (
                  <></>
                )}
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
