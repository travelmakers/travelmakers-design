import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { View } from "../View";
import useStyles from "./Indicator.style";

export type IndicatorStylesNames = ClassNames<typeof useStyles>;

export interface IndicatorProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Indicator 컴포넌트의 타입을 정합니다. */
  type?: "text" | "bullet";

  /** Indicator 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** Indicator 컴포넌트의 크기를 정합니다. */
  size?: "small" | "large";

  /** Indicator 컴포넌트의 토탈 page 수를 정합니다. */
  totalPage?: number;

  /** Indicator 컴포넌트의 현재 page 를 정합니다. */
  currentPage?: number;
}

export const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(
  (
    {
      type = "text",
      color = "navy",
      size = "large",
      totalPage = 1,
      currentPage = 1,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { type, color, size },
      { overrideStyles, name: "Indicator" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <span className={cx(classes.indicator)}>
          {currentPage}/{totalPage}
        </span>
      </View>
    );
  }
);

Indicator.displayName = "@travelmakers-design/core/Indicator";
