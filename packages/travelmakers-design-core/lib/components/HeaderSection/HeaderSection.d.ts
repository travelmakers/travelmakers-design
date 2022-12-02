import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./HeaderSection.style";
export declare type HeaderSectionStylesNames = ClassNames<typeof useStyles>;
export interface HeaderSectionProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** HeaderSection 컴포넌트의 크기를 정합니다. */
    size?: "small" | "large";
    /** HeaderSection 컴포넌트의 타이틀을 정합니다. */
    title: string;
}
export declare const HeaderSection: React.ForwardRefExoticComponent<HeaderSectionProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=HeaderSection.d.ts.map