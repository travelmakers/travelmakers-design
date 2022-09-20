import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { CouponPercentIcon } from "./CouponPercentIcon";

import useStyles from "./IconTag.style";

export type IconTagStylesNames = ClassNames<typeof useStyles>;

export interface TagBaseProps extends TmComponentProps<IconTagStylesNames> {
  /** IconTag 컴포넌트의 스타일을 정합니다. */
  fill?: boolean;
}

export interface _IconTagProps
  extends TagBaseProps,
    TmComponentProps<IconTagStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type TagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _IconTagProps
>;

type TagComponent = <C extends React.ElementType = "span">(
  props: TagProps<C>
) => React.ReactElement;

export const IconTag: TagComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "span">(
    {
      component,
      fill = false,
      children,
      className,
      overrideStyles,
      __staticSelector = "span",
    }: TagProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element: any = component || "span";

    const { classes, cx } = useStyles(
      { fill },
      { overrideStyles, name: "span" }
    );

    return (
      <Element
        ref={ref}
        className={cx(classes.container, !fill && classes["line"], className)}
      >
        <CouponPercentIcon />
        {children}
      </Element>
    );
  }
);

IconTag.displayName = "@travelmakers-design/core/IconTag";
