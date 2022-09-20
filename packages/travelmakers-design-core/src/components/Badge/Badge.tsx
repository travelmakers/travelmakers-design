import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import useStyles from "./Badge.style";

export type BadgeStylesNames = ClassNames<typeof useStyles>;

export type BadgeSize = "small" | "medium" | "large";

export type BadgeType = "text" | "number";

export interface BadgeBaseProps extends TmComponentProps<BadgeStylesNames> {
  /** Badge 컴포넌트의 크기를 정합니다. */
  size?: BadgeSize;

  /** Badge 컴포넌트의 타입을(text, number) 정합니다. */
  type?: BadgeType;
}

export interface _BadgeProps
  extends BadgeBaseProps,
    TmComponentProps<BadgeStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type BadgeProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _BadgeProps
>;

type TagComponent = <C extends React.ElementType = "span">(
  props: BadgeProps<C>
) => React.ReactElement;

export const Badge: TagComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "span">(
    {
      component,
      size = "small",
      type = "text",
      children,
      className,
      overrideStyles,
      __staticSelector = "span",
      ...props
    }: BadgeProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element: any = component || "span";

    const { classes, cx } = useStyles(
      { size, type },
      { overrideStyles, name: "span" }
    );

    return (
      <Element
        ref={ref}
        className={cx(classes.container, className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Badge.displayName = "@travelmakers-design/core/Badge";
