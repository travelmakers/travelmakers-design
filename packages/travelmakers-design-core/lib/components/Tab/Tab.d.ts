import { ClassNames, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import usePrimaryStyles from "./TabPrimary.style";
import useSecondaryStyles from "./TabSecondary.style";
export declare type TabPrimaryStylesNames = ClassNames<typeof usePrimaryStyles>;
export declare type TabSecondaryStylesNames = ClassNames<typeof useSecondaryStyles>;
export interface TabProps extends TmComponentProps, React.ComponentPropsWithoutRef<"div"> {
    /** Tab 컴포넌트의 타입을 정합니다. */
    type?: "primary" | "secondary";
    /** Tab 컴포넌트의 색상을 정합니다. */
    size?: "small" | "large";
    /** Tab 컴포넌트의 버튼 array를 정합니다. */
    array?: Array<string>;
}
export declare function getCurrentTab(): string;
export declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tab.d.ts.map