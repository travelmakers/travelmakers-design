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
import useStyles from "./SkeletonTimeLineBanner.style";

export type SkeletonTimeLineBannerStylesNames = ClassNames<typeof useStyles>;

export interface SkeletonTimeLineBannerProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {}

export const SkeletonTimeLineBanner = forwardRef<
  HTMLDivElement,
  SkeletonTimeLineBannerProps
>(({ onClick, className, co, overrideStyles, ...props }, ref) => {
  const theme = useTmTheme();
  const { classes, cx } = useStyles(
    {},
    { overrideStyles, name: "SkeletonTimeLineBanner" }
  );

  return (
    <>
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
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
              __html: "&nbsp;",
            }}
            style={{
              backgroundColor: "rgba(200, 200, 200, 0.5)",
              width: "20%",
              borderRadius: 8,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: "&nbsp;",
            }}
            style={{
              backgroundColor: "rgba(200, 200, 200, 0.5)",
              marginTop: 2,
              borderRadius: 8,
            }}
          />
        </Typography>
        <div className={cx(classes.labelWrapper)} onClick={onClick}>
          <Typography
            className={cx(classes.labelText, classes.textMaxLength)}
            family="Pretendard"
            level="b1"
            color={theme.colors.white}
            strong
          >
            <div
              dangerouslySetInnerHTML={{
                __html: "&nbsp;",
              }}
              style={{
                backgroundColor: "rgba(200, 200, 200, 0.5)",
                width: "100px",
                borderRadius: 8,
              }}
            />
          </Typography>
        </div>
        <div className={cx(classes.imageOval)} />
      </View>
      {props.children}
    </>
  );
});

SkeletonTimeLineBanner.displayName =
  "@travelmakers-design/core/SkeletonTimeLineBanner";
