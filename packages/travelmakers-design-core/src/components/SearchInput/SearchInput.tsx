import {
  ClassNames,
  CoRadius,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmFontSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import { InputBaseProps, InputStylesNames } from "../Input/Input";
import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";

import { CloseIcon } from "../IconButton/CloseIcon";
import { SearchIcon } from "./SearchIcon";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./SearchInput.style";

export interface SearchInputBaseProps
  extends TmComponentProps<InputStylesNames> {
  /** SearchInput 컴포넌트 Style을 지정합니다. (default: true) */
  line?: boolean;
}

interface _SearchInputProps extends SearchInputBaseProps, InputBaseProps {
  /** Static css selector base */
  __staticSelector?: string;
}

export type SearchInputProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, _SearchInputProps>;

type SearchInputComponent = <C extends React.ElementType = "input">(
  props: SearchInputProps<C>
) => React.ReactElement;

export const SearchInput: SearchInputComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "input">(
      {
        component,
        width,
        label,
        line = true,
        description,
        descriptionType = "description",
        icon = <SearchIcon />,
        rightSectionWidth = 48,
        rightSection = <CloseIcon />,
        rightSectionProps = {},
        wrapperProps,
        invalid = false,
        required = false,
        disabled = false,
        multiline = false,
        roundness = true,
        className,
        style,
        co,
        overrideStyles,
        value,
        onChange,
        ...props
      }: SearchInputProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const theme = useTmTheme();
      const [input, setInput] = useState<string>(value);

      const { classes, cx } = useStyles(
        {
          roundness,
          multiline,
          invalid,
          width,
          descriptionType,
        },
        { overrideStyles, name: "Input" }
      );
      const Element: any = component || "input";

      const _onRightSectionClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
      ) => {
        !disabled && _onChange({ target: { value: "" } });
      };

      // ChangeEvent<HTMLInputElement>
      const _onChange = (e: { target: { value: "" } }) => {
        setInput(e?.target?.value);
        onChange && onChange(e);
      };

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
              <div
                className={cx(classes.icon, { [classes.disabled]: disabled })}
              >
                {icon}
              </div>
            )}

            <Element
              {...props}
              ref={ref}
              value={input}
              onChange={_onChange}
              className={cx(classes.input, {
                [classes.fill]: !line,
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
                className={cx(
                  classes.rightSection,
                  rightSectionProps.className
                )}
                onClick={_onRightSectionClick}
              >
                {rightSection}
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

SearchInput.displayName = "@travelmakers-design/core/SearchInput";
