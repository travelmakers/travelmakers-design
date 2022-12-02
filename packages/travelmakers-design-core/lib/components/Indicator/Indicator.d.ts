import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Indicator.style";
export declare type IndicatorStylesNames = ClassNames<typeof useStyles>;
export interface IndicatorProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Indicator 컴포넌트의 타입을 정합니다. */
    type?: "text" | "bullet";
    /** Indicator 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** Indicator 컴포넌트의 크기를 정합니다. */
    size?: "small" | "large";
    /** Indicator 컴포넌트의 토탈 page 수를 정합니다. */
    totalPage?: number;
    /** Indicator 컴포넌트의 현재 page 를 정합니다. */
    currentPage?: number;
}
export declare const Indicator: React.ForwardRefExoticComponent<IndicatorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Indicator.d.ts.map