import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Callout.style";
export declare type CalloutStylesNames = ClassNames<typeof useStyles>;
export interface CalloutProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Callout 컴포넌트의 타입을 정합니다. */
    type?: "default" | "warning";
    /** Callout 컴포넌트의 타이틀을 정합니다. */
    title: string;
    /** Callout 컴포넌트의 내용을 정합니다. */
    content?: React.ReactNode;
}
export declare const Callout: React.ForwardRefExoticComponent<CalloutProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Callout.d.ts.map