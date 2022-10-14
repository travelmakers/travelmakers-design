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
import { BackIcon } from "./BackIcon";
import useStyles from "./HeaderSection.style";

export type HeaderSectionStylesNames = ClassNames<typeof useStyles>;

export interface HeaderSectionProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** HeaderSection 컴포넌트의 크기를 정합니다. */
  size?: "small" | "large";

  /** HeaderSection 컴포넌트의 타이틀을 정합니다. */
  title: string;
}

export const HeaderSection = forwardRef<HTMLDivElement, HeaderSectionProps>(
  ({ size = "small", title, className, co, overrideStyles, ...props }, ref) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { size },
      { overrideStyles, name: "HeaderSection" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.wrapper)}>
          <BackIcon
            width={size === "small" ? "16px" : "24px"}
            height={size === "small" ? "16px" : "24px"}
          />
          <span className={cx(classes.title)}>{title}</span>
        </div>
      </View>
    );
  }
);

HeaderSection.displayName = "@travelmakers-design/core/Header/Section";
