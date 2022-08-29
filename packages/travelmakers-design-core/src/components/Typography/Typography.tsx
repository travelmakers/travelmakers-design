import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmFontFamily,
  TmFontSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { View } from "../View";
import useStyles from "./Typography.style";

export type TypographyStylesNames = ClassNames<typeof useStyles>;

export type TypographyTextAlign = "left" | "center" | "right";

export interface SharedTypographyProps
  extends TmComponentProps<TypographyStylesNames> {
  /** Typography 컴포넌트의 font-family를 정합니다. */
  family?: TmFontFamily;

  /** Typography 컴포넌트의 크기를 정합니다. */
  level?: TmFontSize;

  /** Typography 컴포넌트의 text-align을 정합니다. */
  textAlign?: TypographyTextAlign;

  /** true일 경우 Text가 disabled 됩니다. */
  disabled?: boolean;

  /** true일 경우 Text가 strong 됩니다. */
  strong?: boolean;

  /** true일 경우 Text가 italic 됩니다. */
  italic?: boolean;

  /** true일 경우 Text가 underline 됩니다. */
  underline?: boolean;

  /** mobile일 경우의 Typography 컴포넌트의 크기를 지정합니다. */
  mobileLevel?: TmFontSize;

  /** tablet일 경우의 Typography 컴포넌트의 크기를 지정합니다. */
  tabletLevel?: TmFontSize;
}

export type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTypographyProps>;

type TypographyComponent = <C extends React.ElementType = "span">(
  props: TypographyProps<C>
) => React.ReactElement;

export const Typography: TypographyComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "span">(
      {
        children,
        component,
        family = "Noto Serif KR",
        level = "h1",
        mobileLevel,
        tabletLevel,
        textAlign = "left",
        disabled = false,
        strong = false,
        italic = false,
        underline = false,
        className,
        co,
        overrideStyles,
        ...props
      }: TypographyProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const theme = useTmTheme();
      const { classes, cx } = useStyles(
        {
          family,
          level,
          disabled,
          strong,
          italic,
          underline,
          textAlign,
          mobile: mobileLevel,
          tablet: tabletLevel,
        },
        { overrideStyles, name: "span" }
      );

      return (
        <View<any>
          component={component || "span"}
          ref={ref}
          type={"span"}
          disabled={disabled}
          className={cx(classes.root, classes["solid"], className)}
          co={co}
          onTouchStart={() => {}}
          {...props}
        >
          <div className={classes.inner}>
            <span className={classes.label}>{children}</span>
          </div>
        </View>
      );
    }
  );

Typography.displayName = "@travelmakers-design/core/Typography";
