import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { View } from "../View";
import useStyles from "./Price.style";

export type PriceStylesNames = ClassNames<typeof useStyles>;

// NOTE: 필요한사항: 할인(percentText), 1박(nightText), 가격(priceText), 시작가(priceStartText)
export interface PriceProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Price 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";

  /** Price 컴포넌트의 할인율을 표시합니다. */
  percentText?: string;

  /** Price 컴포넌트의 1박을 표시합니다. */
  nightText?: string;

  /** Price 컴포넌트의 가격을 표시합니다. */
  priceText?: number;

  /** Price 컴포넌트의 시작가격을 표시합니다. */
  priceStartText?: string;

  /** Price 컴포넌트의 할인율 표시여부를 결정합니다. */
  percentBool?: boolean;

  /** Price 컴포넌트의 1박 표시여부를 결정합니다.. */
  nightBool?: boolean;

  /** Price 컴포넌트의 가격 표시여부를 결정합니다.. */
  priceBool?: boolean;

  /** Price 컴포넌트의 시작가격 표시여부를 결정합니다. */
  priceStartBool?: boolean;
}

export const Price = forwardRef<HTMLDivElement, PriceProps>(
  (
    {
      type = "primary",
      percentText = "",
      nightText = "",
      priceText,
      priceStartText = "",
      percentBool = true,
      nightBool = true,
      priceBool = true,
      priceStartBool = true,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { type },
      { overrideStyles, name: "Price" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        {percentBool && (
          <span className={cx(classes.percentText)}>{percentText}%</span>
        )}
        {nightBool && (
          <span className={cx(classes.nightText)}>{nightText}</span>
        )}
        {priceBool && (
          <>
            <span className={cx(classes.priceText)}>
              {priceText.toLocaleString("ko")}
            </span>
            <span className={cx(classes.priceBeforeText)}>원~</span>
          </>
        )}
        {priceStartBool && (
          <span className={cx(classes.priceStartText)}>| {priceStartText}</span>
        )}
      </View>
    );
  }
);

Price.displayName = "@travelmakers-design/core/Price";
