import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Input.style";
export declare type InputStylesNames = ClassNames<typeof useStyles>;
export declare type InputDescriptionType = "description" | "error" | "success";
export interface InputBaseProps extends TmComponentProps<InputStylesNames> {
    /** Input 컴포넌트 너비를 설정합니다. (default:100%) */
    width?: number;
    /** Input 컴포넌트 상단 영역에 요소가 추가됩니다. */
    label?: string;
    /** Input 컴포넌트 하단 영역에 요소가 추가됩니다.
     * (descriptionType이 error, success의 경우 `invalid:true`일 때에만 표출됩니다.)
     */
    description?: string;
    /** description의 타입을 설정합니다. */
    descriptionType?: InputDescriptionType;
    /** Input 컴포넌트 왼쪽 영역에 요소가 추가됩니다. */
    icon?: React.ReactNode;
    /** Input 컴포넌트 오른쪽 영역에 요소가 추가됩니다. */
    rightSection?: React.ReactNode;
    /** 오른쪽 영역의 너비를 정합니다. */
    rightSectionWidth?: number;
    /** 오른쪽 영역을 감싸는 div에 속성을 전달합니다. */
    rightSectionProps?: React.ComponentPropsWithoutRef<"div">;
    /** input을 감싸는 요소에 속성을 전달합니다. */
    wrapperProps?: React.ComponentPropsWithoutRef<"div"> & {
        [key: string]: any;
    };
    /** required 상태가 됩니다. */
    required?: boolean;
    /** true일 경우 radius를 100px로 지정합니다. (default: false) */
    roundness?: boolean;
    /**
     * invalid 상태가 됩니다.
     * 테두리 색상이 red로 변경됩니다.
     */
    invalid?: boolean;
    /** Will input have multiple lines? */
    multiline?: boolean;
    /** disabled 상태가 됩니다. */
    disabled?: boolean;
}
export interface _InputProps extends InputBaseProps, TmComponentProps<InputStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type InputProps<C extends React.ElementType> = PolymorphicComponentProps<C, _InputProps>;
declare type InputComponent = <C extends React.ElementType = "input">(props: InputProps<C>) => React.ReactElement;
export declare const Input: InputComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Input.d.ts.map