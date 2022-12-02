import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./IconTag.style";
export declare type IconTagStylesNames = ClassNames<typeof useStyles>;
export interface IconTagBaseProps extends TmComponentProps<IconTagStylesNames> {
    /** IconTag 컴포넌트의 스타일을 정합니다. */
    fill?: boolean;
}
export interface _IconTagProps extends IconTagBaseProps, TmComponentProps<IconTagStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type IconTagProps<C extends React.ElementType> = PolymorphicComponentProps<C, _IconTagProps>;
declare type TagComponent = <C extends React.ElementType = "span">(props: IconTagProps<C>) => React.ReactElement;
export declare const IconTag: TagComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=IconTag.d.ts.map