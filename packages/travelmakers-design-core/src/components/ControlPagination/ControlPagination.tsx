import { CURRENT_SELECTION } from "@storybook/addon-docs";
import {
  ClassNames,
  TmComponentProps,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef, useState } from "react";

import { Image } from "../Image";
import { View } from "../View";
import useStyles from "./ControlPagination.style";

export type ProgressStylesNames = ClassNames<typeof useStyles>;

let SELECTED_PAGE = 1;

// 현재 탭 반환 메소드
export function getCurrentPage(): number {
  return SELECTED_PAGE;
}
export interface ControlPaginationProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** ControlPagination 컴포넌트의 색상을 정합니다. */
  color?: "navy" | "white";

  /** ControlPagination 컴포넌트의 색상을 정합니다. */
  size?: "small" | "large";

  /** ControlPagination 컴포넌트의 토탈 page 수를 정합니다. */
  totalPage?: number;

  /** ControlPagination 컴포넌트의 현재 page 를 정합니다. */
  currentPage?: number;

  /** ControlPagination 컴포넌트의 무한루프 여부를 정합니다. */
  infinity?: boolean;

  /** ControlPagination 컴포넌트의 이전 버튼을 눌렀을때 이벤트를 지정합니다. */
  previousClick?: () => void;

  /** ControlPagination 컴포넌트의 다음 버튼을 눌렀을때 이벤트를 지정합니다. */
  nextClick?: () => void;
}

export const ControlPagination = forwardRef<
  HTMLDivElement,
  ControlPaginationProps
>(
  (
    {
      color = "navy",
      size = "small",
      totalPage = 1,
      currentPage = 1,
      infinity = false,
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
      { color, size },
      { overrideStyles, name: "ControlPagination" }
    );
    const [selectedPage, setSelectedPage] = useState(SELECTED_PAGE);

    let previousButton =
      color === "navy"
        ? require("../../assets/svg/ic-arrow-previous-navy.svg")
        : require("../../assets/svg/ic-arrow-previous-white.svg");

    let nextButton =
      color === "navy"
        ? require("../../assets/svg/ic-arrow-next-navy.svg")
        : require("../../assets/svg/ic-arrow-next-white.svg");

    // 무한 루프가 불가능한 경우, 버튼 이미지 수정
    if (!infinity) {
      if (selectedPage > totalPage || selectedPage <= 1) {
        previousButton = require("../../assets/svg/ic-arrow-previous-disable.svg");
      }

      if (selectedPage >= totalPage) {
        nextButton = require("../../assets/svg/ic-arrow-next-disable.svg");
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
          previousButton = require("../../assets/svg/ic-arrow-previous-disable.svg");
        } else {
          page = selectedPage - 1; // 첫 번째 페이지가 아닌 경우, 이전 페이지로 이동
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

          nextButton = require("../../assets/svg/ic-arrow-next-disable.svg");
        } else {
          page = selectedPage + 1; // 마지막 페이지가 아닌 경우, 다음 페이지로 이동
        }
      }
      setSelectedPage(page);
      SELECTED_PAGE = page;

      nextClick();
    };

    return (
      <View<any>
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <Image
          src={previousButton}
          className={cx(classes.button)}
          onClick={handlePreviousClick}
        />

        <span className={cx(classes.indicator)}>
          {selectedPage} / {totalPage}
        </span>
        <Image
          src={nextButton}
          className={cx(classes.button)}
          onClick={handleNextClick}
        />
      </View>
    );
  }
);

ControlPagination.displayName =
  "@travelmakers-design/core/Header/ControlPagination";
