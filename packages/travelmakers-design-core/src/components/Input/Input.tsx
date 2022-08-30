import {
  ClassNames,
  CoRadius,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmFontSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./Input.style";

export type InputStylesNames = ClassNames<typeof useStyles>;

export type InputDescriptionType = "description" | "error" | "success";

export interface InputBaseProps {
  /** Input 컴포넌트 너비를 설정합니다. (default:100%) */
  width?: number;

  /** Input 컴포넌트 상단 영역에 요소가 추가됩니다. */
  label?: string;

  /** Input 컴포넌트 하단 영역에 요소가 추가됩니다.
   * (descriptionType이 error, sccess의 경우 `invalid:true`일 때에만 표출됩니다.)
   */
  description?: string;

  /** description의 타입을 설정합니다. */
  descriptionType?: InputDescriptionType;

  /** Input 컴포넌트 왼쪽 영역에 요소가 추가됩니다. */
  icon?: React.ReactNode;

  /** Input 컴포넌트 오른쪽 영역에 요소가 추가됩니다. */
  rightSection?: React.ReactNode;

  /** 오른쪽 영역의 너비를 정합니다. */
  rightSectionWidth?: number;

  /** 오른쪽 영역을 감싸는 div에 속성을 전달합니다. */
  rightSectionProps?: React.ComponentPropsWithoutRef<"div">;

  /** input을 감싸는 요소에 속성을 전달합니다. */
  wrapperProps?: React.ComponentPropsWithoutRef<"div"> & { [key: string]: any };

  /** required 상태가 됩니다. */
  required?: boolean;

  /** true일 경우 radius를 100px로 지정합니다. (default: false) */
  roundness?: boolean;

  /**
   * invalid 상태가 됩니다.
   * 테두리 색상이 red로 변경됩니다.
   */
  invalid?: boolean;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** disabled 상태가 됩니다. */
  disabled?: boolean;
}

interface _InputProps
  extends InputBaseProps,
    TmComponentProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _InputProps
>;

type InputComponent = <C extends React.ElementType = "input">(
  props: InputProps<C>
) => React.ReactElement;

export const Input: InputComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "input">(
    {
      component,
      width,
      label,
      description,
      descriptionType = "description",
      icon,
      rightSectionWidth = 48,
      rightSection,
      rightSectionProps = {},
      wrapperProps,
      invalid = false,
      required = false,
      disabled = false,
      multiline = false,
      roundness = false,
      className,
      style,
      co,
      overrideStyles,
      __staticSelector = "Input",
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { roundness, multiline, invalid, width, descriptionType },
      { overrideStyles, name: __staticSelector }
    );
    const Element: any = component || "input";

    return (
      <View style={{ width: width ? `${width}px` : "100%" }}>
        {label && (
          <Typography
            level={"b2"}
            family={"Pretendard"}
            color={theme.colors.gray1}
            style={{ marginBottom: 4 }}
          >
            {label}
          </Typography>
        )}
        <View
          className={cx(classes.wrapper, className)}
          co={co}
          style={style}
          {...wrapperProps}
        >
          {icon && (
            <div className={cx(classes.icon, { [classes.disabled]: disabled })}>
              {icon}
            </div>
          )}

          <Element
            {...props}
            ref={ref}
            className={cx(classes.input, {
              [classes.withIcon]: icon,
              [classes.invalid]: invalid,
              [classes.disabled]: disabled,
            })}
            required={required}
            disabled={disabled}
            style={{
              paddingRight: rightSection
                ? rightSectionWidth
                : theme.spacing.small,
            }}
          />

          {rightSection && (
            <div
              {...rightSectionProps}
              style={{
                ...rightSectionProps.style,
                paddingRight: 32,
              }}
              className={cx(classes.rightSection, rightSectionProps.className)}
            >
              <Typography
                level={"b2"}
                family={"Pretendard"}
                color={theme.colors.green2}
              >
                {rightSection}
              </Typography>
            </div>
          )}
        </View>
        {description && descriptionType === "description" ? (
          <Typography
            level={"b3"}
            family={"Pretendard"}
            color={invalid ? theme.colors.red2 : theme.colors.navy3}
            style={{ marginTop: 4 }}
          >
            {description}
          </Typography>
        ) : (
          invalid && (
            <Typography
              level={"b3"}
              family={"Pretendard"}
              color={
                descriptionType === "error"
                  ? theme.colors.red2
                  : descriptionType === "success"
                  ? theme.colors.green3
                  : theme.colors.navy3
              }
              style={{ marginTop: 4 }}
            >
              {description}
            </Typography>
          )
        )}
      </View>
    );
  }
);

Input.displayName = "@travelmakers-design/core/Input";
