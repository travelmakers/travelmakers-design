import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./ControlIndicator.style";
export declare type ProgressStylesNames = ClassNames<typeof useStyles>;
export declare function getCurrentPage(): number;
export interface ControlIndicatorProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
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
export declare const ControlIndicator: React.ForwardRefExoticComponent<ControlIndicatorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ControlIndicator.d.ts.map