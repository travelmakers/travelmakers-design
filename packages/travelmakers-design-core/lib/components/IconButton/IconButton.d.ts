import { PolymorphicComponentProps } from "@travelmakers-design/styles";
import React from "react";
import { SharedButtonProps } from "../Button/Button";
declare type _SharedIconButtonProps = Omit<SharedButtonProps, "leftIcon" | "rightIcon">;
export declare type IconButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, _SharedIconButtonProps>;
declare type IconButtonComponent = <C extends React.ElementType = "button">(props: IconButtonProps<C>) => React.ReactElement;
export declare const IconButton: IconButtonComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=IconButton.d.ts.map