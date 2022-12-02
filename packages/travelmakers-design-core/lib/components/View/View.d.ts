import { Co, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
declare type ViewCo = Co | Co[];
interface _ViewProps extends Omit<TmComponentProps, "co" | "overrideStyles"> {
    co?: ViewCo;
}
export declare type ViewProps<C extends React.ElementType> = PolymorphicComponentProps<C, _ViewProps>;
declare type ViewComponent = <C extends React.ElementType = "div">(props: ViewProps<C>) => React.ReactElement;
export declare const View: ViewComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=View.d.ts.map