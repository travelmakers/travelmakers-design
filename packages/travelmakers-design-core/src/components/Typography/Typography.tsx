import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { View } from "../View";
import useStyles from "./Typography.style";

export type TypographyStylesNames = ClassNames<typeof useStyles>;

export interface SharedTypographyProps
  extends TmComponentProps<TypographyStylesNames> {
  /** Button 컴포넌트의 크기를 정합니다. */
  size?: TmSize;

  /** Button 컴포넌트의 색상을 정합니다. */
  variant?: TmPalette;

  /** Button 컴포넌트의 모양을 지정합니다. */
  line?: boolean;

  /** true일 경우 radius를 100px로 지정합니다. (default: false) */
  roundness?: boolean;

  /** true일 경우 좌우 공간을 모두 차지합니다. */
  fullWidth?: boolean;

  /** button 요소의 type을 지정합니다. */
  type?: "submit" | "button" | "reset";

  /** true일 경우 button이 disabled 됩니다. */
  disabled?: boolean;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  leftIcon?: React.ReactNode;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  rightIcon?: React.ReactNode;
}

export type TypographyProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedTypographyProps>;

type TypographyComponent = <C extends React.ElementType = "button">(
  props: TypographyProps<C>
) => React.ReactElement;

export const Typography: TypographyComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "button">(
      {
        children,
        component,
        size = "medium",
        variant: _variant,
        line,
        roundness = false,
        fullWidth = false,
        type = "button",
        disabled = false,
        leftIcon,
        rightIcon,
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
          variant: _variant,
          size,
          fullWidth,
          roundness,
          line,
        },
        { overrideStyles, name: "Button" }
      );

      return (
        <View<any>
          component={component || "button"}
          ref={ref}
          type={type}
          disabled={disabled}
          className={cx(
            classes.root,
            classes[line ? "ghost" : "solid"],
            className
          )}
          co={co}
          onTouchStart={() => {}}
          {...props}
        >
          <div className={classes.inner}>
            {leftIcon && (
              <span className={cx(classes.icon, classes.leftIcon)}>
                {leftIcon}
              </span>
            )}

            <span className={classes.label}>{children}</span>

            {rightIcon && (
              <span className={cx(classes.icon, classes.rightIcon)}>
                {rightIcon}
              </span>
            )}
          </div>
        </View>
      );
    }
  );

Typography.displayName = "@travelmakers-design/core/Typography";
