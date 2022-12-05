import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { Badge } from "../Badge";
import { View } from "../View";
import { Image } from "../Image";
import { IconMobileMypage, IconLogo, IconSearch } from "../../assets/icon";

import useStyles from "./Topbar.style";

export type TopbarStylesNames = ClassNames<typeof useStyles>;

// NOTE: 필요한사항: 할인(percentText), 1박(nightText), 가격(priceText), 시작가(priceStartText)
export interface TopbarProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Topbar 컴포넌트의 검색 타입을 정합니다. */
  mobileType?: "Expanded" | "Collapsed";

  /** Topbar 컴포넌트의 로그인여부를 정합니다. */
  isLogin?: boolean;

  /** Topbar 컴포넌트의 badge여부를 정합니다. */
  isBadge?: boolean;

  /** Topbar 컴포넌트의 가격을 표시합니다. */
  logoClick?: () => void;

  /** Topbar 컴포넌트의 가격을 표시합니다. */
  searchClick?: () => void;

  /** Topbar 컴포넌트의 가격을 표시합니다. */
  onClick?: () => void;
}

export const Topbar = forwardRef<HTMLDivElement, TopbarProps>(
  (
    {
      mobileType = "Expanded",
      isLogin = false,
      isBadge = false,
      logoClick,
      searchClick,
      onClick,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { mobileType },
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
            <IconLogo className={cx(classes.logo)} onClick={logoClick} />

            <div className={cx(classes.section)}>
              <div className={cx(classes.searchBox)} onClick={searchClick}>
                <IconSearch className={cx(classes.searchIcon)} />
                <span className={cx(classes.searchText)}>호텔 검색</span>
              </div>
              <div className={cx(classes.divider)} />
              <span className={cx(classes.menuText)} onClick={onClick}>
                {isLogin ? "마이페이지" : "로그인"}
                {isLogin && isBadge && (
                  <Badge className={cx(classes.newBadge)}>N</Badge>
                )}
              </span>

              {/* NOTE: only Mobile */}
              <div className={cx(classes.mobileSearchBox)} onClick={onClick}>
                <IconMobileMypage className={cx(classes.mypageIcon)} />
                {isLogin && isBadge && (
                  <Badge className={cx(classes.newBadge)}></Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </View>
    );
  }
);

Topbar.displayName = "@travelmakers-design/core/Topbar";
