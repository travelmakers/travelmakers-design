import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Badge.style";
export declare type BadgeStylesNames = ClassNames<typeof useStyles>;
export declare type BadgeSize = "small" | "medium" | "large";
export declare type BadgeType = "text" | "number";
export interface BadgeBaseProps extends TmComponentProps<BadgeStylesNames> {
    /** Badge 컴포넌트의 크기를 정합니다. */
    size?: BadgeSize;
    /** Badge 컴포넌트의 타입을(text, number) 정합니다. */
    type?: BadgeType;
}
export interface _BadgeProps extends BadgeBaseProps, TmComponentProps<BadgeStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type BadgeProps<C extends React.ElementType> = PolymorphicComponentProps<C, _BadgeProps>;
declare type TagComponent = <C extends React.ElementType = "span">(props: BadgeProps<C>) => React.ReactElement;
export declare const Badge: TagComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Badge.d.ts.map