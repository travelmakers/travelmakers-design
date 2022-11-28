import {
  ClassNames,
  TmComponentProps,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";

import { View } from "../View";
import usePrimaryStyles from "./TabPrimary.style";
import useSecondaryStyles from "./TabSecondary.style";

export type TabPrimaryStylesNames = ClassNames<typeof usePrimaryStyles>;
export type TabSecondaryStylesNames = ClassNames<typeof useSecondaryStyles>;

let CURRENT_TAB = "";

export interface TabProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Tab 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";

  /** Tab 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";

  /** Tab 컴포넌트의 버튼 array를 정합니다. */
  array?: Array<string>;
}

// 현재 탭 반환 메소드
export function getCurrentTab(): string {
  return CURRENT_TAB;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  (
    {
      type = "primary",
      size = "small",
      array = [],
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } =
      type === "primary"
        ? usePrimaryStyles({ size }, { overrideStyles, name: "Tab" })
        : useSecondaryStyles({ size }, { overrideStyles, name: "Tab" });

    const [currentTab, setCurrentTab] = useState("");

    const onTabItemClick = (item: string) => {
      CURRENT_TAB = item;
      setCurrentTab(item);
    };

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        {array.map((item, index) => {
          let isCurrentTab = false;

          if (CURRENT_TAB !== "") {
            // 선택된 탭이 있는 경우 선택된 탭 확인
            isCurrentTab = CURRENT_TAB === item;
          } else if (index === 0) {
            // 선택된 탭이 없는 경우 첫번째 탭 선택
            isCurrentTab = true;
            onTabItemClick(item);
          }

          return (
            <>
              <span
                className={
                  isCurrentTab ? cx(classes.selectedTab) : cx(classes.tab)
                }
                onClick={() => onTabItemClick(item)}
              >
                {item}
                {type === "secondary" && isCurrentTab && (
                  <span className={cx(classes.selectedTabBottom)} />
                )}
              </span>
              {type === "primary" && index !== array.length - 1 && (
                <span className={cx(classes.divider)} />
              )}
            </>
          );
        })}
      </View>
    );
  }
);

Tab.displayName = "@travelmakers-design/core/Tab";
