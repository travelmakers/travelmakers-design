import { ClassNames, PolymorphicComponentProps, TmColor, TmComponentProps, TmFontFamily, TmFontSize, TmPalette } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Typography.style";
export declare type TypographyStylesNames = ClassNames<typeof useStyles>;
export declare type TypographyTextAlign = "left" | "center" | "right";
export interface SharedTypographyProps extends TmComponentProps<TypographyStylesNames> {
    /** Typography 컴포넌트의 font-family를 정합니다. */
    family?: TmFontFamily;
    /** Typography 컴포넌트의 크기를 정합니다. */
    level?: TmFontSize;
    /** Typography 컴포넌트의 text-align을 정합니다. */
    textAlign?: TypographyTextAlign;
    /** true일 경우 Text가 disabled 됩니다. */
    disabled?: boolean;
    /** true일 경우 Text가 strong 됩니다. */
    strong?: boolean;
    /** true일 경우 Text가 italic 됩니다. */
    italic?: boolean;
    /** true일 경우 Text가 underline 됩니다. */
    underline?: boolean;
    /** Text가 컴포넌트의 색상을 정합니다. */
    color?: TmPalette | TmColor | string;
    /** mobile일 경우의 Typography 컴포넌트의 크기를 지정합니다. */
    mobileLevel?: TmFontSize;
    /** tablet일 경우의 Typography 컴포넌트의 크기를 지정합니다. */
    tabletLevel?: TmFontSize;
}
export declare type TypographyProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedTypographyProps>;
declare type TypographyComponent = <C extends React.ElementType = "span">(props: TypographyProps<C>) => React.ReactElement;
export declare const Typography: TypographyComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Typography.d.ts.map