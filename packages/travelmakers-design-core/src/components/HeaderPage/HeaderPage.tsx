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
import useStyles from "./HeaderPage.style";

export type HeaderPageStylesNames = ClassNames<typeof useStyles>;

export interface HeaderPageProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** HeaderPage 컴포넌트의 크기를 정합니다. */
  size?: "small" | "large";

  /** HeaderPage 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** HeaderPage 컴포넌트의 타이틀을 정합니다. */
  title: string;
}

export const HeaderPage = forwardRef<HTMLDivElement, HeaderPageProps>(
  (
    {
      size = "small",
      color = "navy",
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
      { size, color },
      { overrideStyles, name: "HeaderPage" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.titleWrapper)}>
          <span className={cx(classes.divider)} />
          <span className={cx(classes.title)}>{title}</span>
          <span className={cx(classes.divider)} />
        </div>
      </View>
    );
  }
);

HeaderPage.displayName = "@travelmakers-design/core/Header/Section";
