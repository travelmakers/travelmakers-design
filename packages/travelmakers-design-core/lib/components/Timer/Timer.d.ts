import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Timer.style";
export declare type TimerStylesNames = ClassNames<typeof useStyles>;
export declare type TimerSize = "small" | "large";
export declare type TimerColor = "navy" | "white";
export interface TimerProps extends TmComponentProps<TimerStylesNames> {
    /** Timer 컴포넌트의 크기를 정합니다. */
    size?: TimerSize;
    /** Timer 컴포넌트의 색상을 정합니다. */
    color?: TimerColor;
    /** Timer 컴포넌트의 설명을 정합니다. */
    label?: string;
    /** Timer 컴포넌트의 타이머가 끝나는 시간을 정합니다. */
    endAt?: Date;
}
export declare const Timer: React.ForwardRefExoticComponent<TimerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Timer.d.ts.map