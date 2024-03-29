import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmFontFamily,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { View } from "../View";
import useStyles from "./TextButton.style";

export type ButtonStylesNames = ClassNames<typeof useStyles>;

export type ButtonPalette = "navy" | "white" | (string & {});

export interface TextButtonProps extends TmComponentProps<ButtonStylesNames> {
  /** Button 컴포넌트의 크기를 정합니다. */
  size?: TmSize;

  /** Button 컴포넌트의 font-family를 정합니다. */
  family?: TmFontFamily;

  /** Button 컴포넌트의 색상을 정합니다. */
  color?: ButtonPalette;

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

  /** true일 경우 Text가 underline 됩니다. */
  underline?: boolean;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  leftIcon?: React.ReactNode;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  rightIcon?: React.ReactNode;
}

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, TextButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement;

export const TextButton: ButtonComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "button">(
      {
        children,
        component,
        family = "Pretendard",
        size = "medium",
        color: _color = "navy",
        fullWidth = false,
        type = "button",
        disabled = false,
        underline = false,
        leftIcon,
        rightIcon,
        className,
        co,
        overrideStyles,
        ...props
      }: ButtonProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const theme = useTmTheme();
      const { classes, cx } = useStyles(
        {
          color: _color,
          size,
          fullWidth,
          family,
          underline,
          leftIcon,
          rightIcon,
        },
        { overrideStyles, name: "Button" }
      );

      return (
        <View<any>
          component={component || "button"}
          ref={ref}
          type={type}
          disabled={disabled}
          className={cx(classes.root, classes["solid"], className)}
          co={co}
          onTouchStart={() => {}}
          {...props}
        >
          <div className={classes.inner}>
            {leftIcon && (
              <span className={cx(classes.icon, classes.leftIcon)}>
                {leftIcon}
                &nbsp;
              </span>
            )}

            <span className={classes.label}>{children}</span>

            {rightIcon && (
              <span className={cx(classes.icon, classes.rightIcon)}>
                &nbsp;
                {rightIcon}
              </span>
            )}
          </div>
        </View>
      );
    }
  );

TextButton.displayName = "@travelmakers-design/core/TextButton";
