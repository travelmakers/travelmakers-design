import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { Tag } from "../Tag";
import { View } from "../View";
import useStyles from "./HotelItems.style";

export type HotelItemsStylesNames = ClassNames<typeof useStyles>;

export interface HotelItemsProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** HotelItems 컴포넌트의 레이블을 만들어줍니다. */
  items?: string[];

  /** HotelItems 컴포넌트의 fill 여부를 판단합니다. */
  fill?: boolean;

  /** HotelItems 컴포넌트의 판매가능 여부를 표시합니다. */
  soldOut?: boolean;
}

export const HotelItems = forwardRef<HTMLDivElement, HotelItemsProps>(
  (
    {
      items = [],
      soldOut = false,
      fill = false,
      title,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      {},
      { overrideStyles, name: "HotelItems" }
    );

    const Items = () => {
      return (
        <>
          {items.map((item) => (
            <Tag
              color="gray"
              disabled={soldOut}
              fill={fill}
              roundness="full"
              size="medium"
            >
              {item}
            </Tag>
          ))}
        </>
      );
    };

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <Items />
      </View>
    );
  }
);

HotelItems.displayName = "@travelmakers-design/core/HotelItems";
