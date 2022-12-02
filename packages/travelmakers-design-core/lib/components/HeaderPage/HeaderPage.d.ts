import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HeaderPage.style";
export declare type HeaderPageStylesNames = ClassNames<typeof useStyles>;
export interface HeaderPageProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HeaderPage 컴포넌트의 크기를 정합니다. */
    size?: "small" | "large";
    /** HeaderPage 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
    /** HeaderPage 컴포넌트의 타이틀을 정합니다. */
    title: string;
}
export declare const HeaderPage: React.ForwardRefExoticComponent<HeaderPageProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HeaderPage.d.ts.map