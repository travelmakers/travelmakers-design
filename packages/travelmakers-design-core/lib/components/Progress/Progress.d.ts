import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Progress.style";
export declare type ProgressStylesNames = ClassNames<typeof useStyles>;
export interface ProgressProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Progress 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** Progress 컴포넌트의 색상을 정합니다. */
    size?: "small" | "large";
    /** Progress 컴포넌트의 indicator 표시 여부를 정합니다. */
    indicator?: boolean;
    /** Progress 컴포넌트의 토탈 page 수를 정합니다. */
    totalPage?: number;
    /** Progress 컴포넌트의 현재 page 를 정합니다. */
    currentPage?: number;
    /** Progress 컴포넌트의 현재 event transition 여부를 정합니다. */
    activeBarTransition?: boolean;
}
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Progress.d.ts.map