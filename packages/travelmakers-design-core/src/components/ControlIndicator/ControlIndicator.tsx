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

export type ProgressStylesNames = ClassNames<typeof useStyles>;

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
    const [selectedPage, setSelectedPage] = useState(currentPage);

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
          <Image
            src={previousButton}
            className={cx(classes.button)}
            onClick={handlePreviousClick}
          />
          <Image
            src={nextButton}
            className={cx(classes.button)}
            onClick={handleNextClick}
          />
        </div>
      </View>
    );
  }
);

ControlIndicator.displayName =
  "@travelmakers-design/core/Header/ControlIndicator";
