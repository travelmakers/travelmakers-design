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
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { SvgProps } from "react-native-svg";
import useStyles from "./Button.style";

export type ButtonStylesNames = ClassNames<typeof useStyles>;

export interface SharedButtonProps extends TmComponentProps<ButtonStylesNames> {
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
  leftIcon?: any;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  rightIcon?: any;

  /** Button 컴포넌트 내부 내용을 추가합니다. */
  children?: string;
}

// export type ButtonProps<C extends View> = SharedButtonProps;

// type ButtonComponent = <C extends View>(
//   props: ButtonProps<C>
// ) => React.ReactElement;

export const Button: React.FC<SharedButtonProps> & { displayName?: string } =
  forwardRef(
    (
      {
        children,
        // component,
        size = "medium",
        variant: _variant = "primary",
        line = false,
        roundness = false,
        fullWidth = false,
        type = "button",
        disabled = false,
        leftIcon = "",
        rightIcon = "",
        className,
        co,
        overrideStyles,
        ...props
      },
      ref: React.RefObject<View>
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
        <View ref={ref}>
          <TouchableOpacity onPress={() => {}} disabled={disabled}>
            <View>
              {leftIcon && <View>{leftIcon}</View>}
              <Text>{children}</Text>

              {rightIcon && <View>{rightIcon}</View>}
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  );

Button.displayName = "@travelmakers-design/core/Button";
