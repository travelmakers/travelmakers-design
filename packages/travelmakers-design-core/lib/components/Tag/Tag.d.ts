import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Tag.style";
export declare type TagStylesNames = ClassNames<typeof useStyles>;
export declare type TagColor = "green" | "blue" | "purple" | "gray";
export declare type TagSize = "small" | "medium" | "large";
export interface TagBaseProps extends TmComponentProps<TagStylesNames> {
    /** Tag 컴포넌트의 크기를 정합니다. */
    size?: TagSize;
    /** Tag 컴포넌트의 색상을 정합니다. */
    color?: TagColor;
    /** Tag 컴포넌트의 모양을 정합니다. */
    roundness?: boolean;
    /** Tag 컴포넌트의 스타일을 정합니다. */
    fill?: boolean;
    /** Tag 컴포넌트의 disable여부를 정합니다. */
    disabled?: boolean;
}
export interface _TagProps extends TagBaseProps, TmComponentProps<TagStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type TagProps<C extends React.ElementType> = PolymorphicComponentProps<C, _TagProps>;
declare type TagComponent = <C extends React.ElementType = "span">(props: TagProps<C>) => React.ReactElement;
export declare const Tag: TagComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Tag.d.ts.map