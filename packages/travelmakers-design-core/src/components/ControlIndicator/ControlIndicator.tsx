import {
  ClassNames,
  TmComponentProps,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";
import { Progress } from "../Progress";

import { Image } from "../Image";
import { View } from "../View";
import useStyles from "./ControlIndicator.style";

import {
  IconArrowNext,
  IconArrowNextDisabled,
  IconArrowPrev,
  IconArrowPrevDisabled,
} from "../../assets/icon";

export type ProgressStylesNames = ClassNames<typeof useStyles>;

// arrow icon 지정
let ArrowNext = IconArrowNext;
let ArrowPrev = IconArrowPrev;

let SELECTED_PAGE = 1;

// 현재 탭 반환 메소드
export function getCurrentPage(): number {
  return SELECTED_PAGE;
}
export interface ControlIndicatorProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** ControlIndicator 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** ControlIndicator 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";

  /** ControlIndicator 컴포넌트의 토탈 page 수를 정합니다. */
  totalPage?: number;

  /** ControlIndicator 컴포넌트의 현재 page 를 정합니다. */
  currentPage?: number;

  /** ControlIndicator 컴포넌트의 현재 event transition 여부를 정합니다. */
  activeBarTransition?: boolean;

  /** ControlIndicator 컴포넌트의 무한루프 여부를 정합니다. */
  infinity?: boolean;

  /** ControlIndicator 컴포넌트의 이전 버튼을 눌렀을때 이벤트를 지정합니다. */
  previousClick?: () => void;

  /** ControlIndicator 컴포넌트의 다음 버튼을 눌렀을때 이벤트를 지정합니다. */
  nextClick?: () => void;
}

export const ControlIndicator = forwardRef<
  HTMLDivElement,
  ControlIndicatorProps
>(
  (
    {
      color = "navy",
      size = "small",
      totalPage = 1,
      currentPage = 1,
      activeBarTransition = false,
      infinity = false,
      title,
      className,
      co,
      previousClick,
      nextClick,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { size },
      { overrideStyles, name: "ControlIndicator" }
    );
    const [selectedPage, setSelectedPage] = useState(SELECTED_PAGE);

    // 무한 루프가 불가능한 경우, 버튼 이미지 수정
    if (!infinity) {
      if (selectedPage > totalPage || selectedPage <= 1) {
        ArrowPrev = IconArrowPrevDisabled;
      } else {
        ArrowPrev = IconArrowPrev;
      }

      if (selectedPage >= totalPage) {
        ArrowNext = IconArrowNextDisabled;
      } else {
        ArrowNext = IconArrowNext;
      }
    }

    const handlePreviousClick = () => {
      let page = 1;
      if (infinity) {
        // 무한 루프 가능 할때,
        if (selectedPage - 1 === 0) {
          // 첫 번째 페이지 일 경우, 마지막 페이지로 이동
          page = totalPage;
        } else {
          page = selectedPage - 1; // 첫 번째 페이지가 아닌 경우, 이전 페이지로 이동
        }
      } else {
        // 무한 루프 불가능 할때,
        if (selectedPage - 1 === 0) {
          page = 1; // 첫 번째 페이지 일 경우, 1페이지 유지

          // 버튼 disable 설정
          ArrowPrev = IconArrowPrevDisabled;
        } else {
          page = selectedPage - 1; // 첫 번째 페이지가 아닌 경우, 이전 페이지로 이동
          ArrowPrev = IconArrowPrev;
        }
      }

      setSelectedPage(page);
      SELECTED_PAGE = page;

      previousClick();
    };

    const handleNextClick = () => {
      let page = 1;
      if (infinity) {
        // 무한 루프 가능 할때,
        if (selectedPage === totalPage) {
          // 마지막 페이지 일 경우, 첫 번째 페이지로 이동
          page = 1;
        } else {
          page = selectedPage + 1; // 마지막 페이지가 아닌 경우, 다음 페이지로 이동
        }
      } else {
        // 무한 루프 불가능 할때,
        if (selectedPage === totalPage) {
          page = totalPage; // 마지막 페이지 일 경우, 마지막 페이지 유지

          ArrowNext = IconArrowNextDisabled;
        } else {
          page = selectedPage + 1; // 마지막 페이지가 아닌 경우, 다음 페이지로 이동
          ArrowNext = IconArrowNext;
        }
      }
      setSelectedPage(page);
      SELECTED_PAGE = page;

      nextClick();
    };

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <Progress
          color={color}
          size={size}
          totalPage={totalPage}
          currentPage={selectedPage}
          activeBarTransition={activeBarTransition}
          indicator={true}
        />
        <div className={cx(classes.buttonContainer)}>
          <ArrowPrev
            className={cx(classes.button)}
            onClick={handlePreviousClick}
            color={color === "navy" ? theme.colors.navy1 : theme.colors.white}
          />
          <ArrowNext
            className={cx(classes.button)}
            onClick={handleNextClick}
            color={color === "navy" ? theme.colors.navy1 : theme.colors.white}
          />
        </div>
      </View>
    );
  }
);

ControlIndicator.displayName =
  "@travelmakers-design/core/Header/ControlIndicator";
