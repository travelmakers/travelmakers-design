import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import useStyles from "./Tag.style";

export type TagStylesNames = ClassNames<typeof useStyles>;

export type TagColor = "green" | "blue" | "purple" | "gray";

export type TagSize = "small" | "medium" | "large";

export interface TagBaseProps extends TmComponentProps<TagStylesNames> {
  /** Tag 컴포넌트의 크기를 정합니다. */
  size?: TagSize;

  /** Tag 컴포넌트의 색상을 정합니다. */
  color?: TagColor;

  /** Tag 컴포넌트의 모양을 정합니다. */
  roundness?: boolean;

  /** Tag 컴포넌트의 스타일을 정합니다. */
  fill?: boolean;
}

export interface _TagProps
  extends TagBaseProps,
    TmComponentProps<TagStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type TagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _TagProps
>;

type TagComponent = <C extends React.ElementType = "span">(
  props: TagProps<C>
) => React.ReactElement;

export const Tag: TagComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "span">(
    {
      component,
      size = "small",
      color = "green",
      roundness = false,
      fill = true,
      children,
      className,
      overrideStyles,
      __staticSelector = "span",
    }: TagProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element: any = component || "span";

    const { classes, cx } = useStyles(
      { color, roundness, fill, size },
      { overrideStyles, name: "span" }
    );

    return (
      <Element
        ref={ref}
        className={cx(
          classes.container,
          classes[color],
          !fill && classes["line"],
          className
        )}
      >
        {children}
      </Element>
    );
  }
);

Tag.displayName = "@travelmakers-design/core/Tag";
