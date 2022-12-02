import { PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import { InputBaseProps, InputStylesNames } from "../Input/Input";
import React from "react";
export interface SearchInputBaseProps extends TmComponentProps<InputStylesNames> {
    /** SearchInput 컴포넌트 Style을 지정합니다. (default: true) */
    line?: boolean;
}
interface _SearchInputProps extends SearchInputBaseProps, InputBaseProps {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type SearchInputProps<C extends React.ElementType> = PolymorphicComponentProps<C, _SearchInputProps>;
declare type SearchInputComponent = <C extends React.ElementType = "input">(props: SearchInputProps<C>) => React.ReactElement;
export declare const SearchInput: SearchInputComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=SearchInput.d.ts.map