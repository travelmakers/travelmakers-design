import { ClassNames, PolymorphicComponentProps, TmComponentProps, TmPalette, TmSize } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Button.style";
export declare type ButtonStylesNames = ClassNames<typeof useStyles>;
export interface SharedButtonProps extends TmComponentProps<ButtonStylesNames> {
    /** Button 컴포넌트의 크기를 정합니다. */
    size?: TmSize;
    /** Button 컴포넌트의 색상을 정합니다. */
    variant?: TmPalette;
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
    /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
    leftIcon?: React.ReactNode;
    /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
    rightIcon?: React.ReactNode;
}
export declare type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedButtonProps>;
declare type ButtonComponent = <C extends React.ElementType = "button">(props: ButtonProps<C>) => React.ReactElement;
export declare const Button: ButtonComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Button.d.ts.map