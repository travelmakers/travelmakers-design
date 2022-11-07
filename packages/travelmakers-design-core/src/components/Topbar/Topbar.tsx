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
import { Logo } from "./Logo";
import { Search } from "./Search";

import useStyles from "./Topbar.style";

export type TopbarStylesNames = ClassNames<typeof useStyles>;

// NOTE: 필요한사항: 할인(percentText), 1박(nightText), 가격(priceText), 시작가(priceStartText)
export interface TopbarProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Topbar 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";

  /** Topbar 컴포넌트의 가격을 표시합니다. */
  priceText?: number;

  /** Topbar 컴포넌트의 가격 표시여부를 결정합니다.. */
  priceBool?: boolean;
}

export const Topbar = forwardRef<HTMLDivElement, TopbarProps>(
  (
    {
      type = "primary",
      priceText,
      priceBool = true,
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
        <div className={cx(classes.container)}>
          <div className={cx(classes.wrapper)}>
            <Logo />
            <div className={cx(classes.section)}>
              <div className={cx(classes.searchBox)}>
                <Search className={cx(classes.searchIcon)} />
                <span className={cx(classes.searchText)}>원하는 호텔 찾기</span>
              </div>
              <div className={cx(classes.divider)} />
              <span className={cx(classes.menuText)}>마이페이지</span>
            </div>
          </div>
        </div>
      </View>
    );
  }
);

Topbar.displayName = "@travelmakers-design/core/Topbar";
