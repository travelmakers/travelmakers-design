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
import useStyles from "./Progress.style";

export type ProgressStylesNames = ClassNames<typeof useStyles>;

export interface ProgressProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Progress 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** Progress 컴포넌트의 indicator 표시 여부를 정합니다. */
  indicator?: boolean;

  /** Progress 컴포넌트의 토탈 page 수를 정합니다. */
  totalPage?: number;

  /** Progress 컴포넌트의 현재 page 를 정합니다. */
  currentPage?: number;

  /** Progress 컴포넌트의 현재 event transition 여부를 정합니다. */
  activeBarTransition?: boolean;
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      color = "navy",
      indicator = false,
      totalPage = 1,
      currentPage = 1,
      activeBarTransition = false,
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
      { color, indicator },
      { overrideStyles, name: "Progress" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <span className={cx(classes.indicator)}>1/1</span>
        <div className={cx(classes.barContainer)}>
          <div
            className={cx(classes.barActive)}
            style={{
              width: `${(currentPage / totalPage) * 100}%`,
              transition: activeBarTransition ? "width 3s linear" : "none",
            }}
          />
        </div>
      </View>
    );
  }
);

Progress.displayName = "@travelmakers-design/core/Header/Section";
