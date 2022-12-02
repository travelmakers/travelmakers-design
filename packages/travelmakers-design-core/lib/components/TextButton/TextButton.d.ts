import { ClassNames, PolymorphicComponentProps, TmComponentProps, TmFontFamily, TmSize } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./TextButton.style";
export declare type ButtonStylesNames = ClassNames<typeof useStyles>;
export declare type ButtonPalette = "navy" | "white" | (string & {});
export interface TextButtonProps extends TmComponentProps<ButtonStylesNames> {
    /** Button 컴포넌트의 크기를 정합니다. */
    size?: TmSize;
    /** Button 컴포넌트의 font-family를 정합니다. */
    family?: TmFontFamily;
    /** Button 컴포넌트의 색상을 정합니다. */
    color?: ButtonPalette;
    /** Button 컴포넌트의 모양을 지정합니다. */
    line?: boolean;
    /** true일 경우 radius를 100px로 지정합니다. (default: false) */
    roundness?: boolean;
    /** true일 경우 좌우 공간을 모두 차지합니다. */
    fullWidth?: boolean;
    /** button 요소의 type을 지정합니다. */
    type?: "submit" | "button" | "reset";
    /** true일 경우 button이 disabled 됩니다. */
    disabled?: boolean;
    /** true일 경우 Text가 underline 됩니다. */
    underline?: boolean;
    /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
    leftIcon?: React.ReactNode;
    /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
    rightIcon?: React.ReactNode;
}
export declare type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, TextButtonProps>;
declare type ButtonComponent = <C extends React.ElementType = "button">(props: ButtonProps<C>) => React.ReactElement;
export declare const TextButton: ButtonComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=TextButton.d.ts.map