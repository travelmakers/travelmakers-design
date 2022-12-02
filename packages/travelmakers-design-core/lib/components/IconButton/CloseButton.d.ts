import { IconButtonProps } from "./IconButton";
import React from "react";
export declare type CloseButtonProps = Omit<IconButtonProps<"button">, "children">;
declare type CloseButtonComponent = (props: CloseButtonProps) => React.ReactElement;
export declare const CloseButton: CloseButtonComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=CloseButton.d.ts.map