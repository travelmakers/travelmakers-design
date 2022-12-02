import React from "react";
import { ColorScheme } from "./types";
interface ColorSchemeContextProps {
    colorScheme: ColorScheme;
    toggleColorScheme(colorScheme?: ColorScheme): void;
}
export declare const useTmColorScheme: () => ColorSchemeContextProps;
interface ColorSchemeProviderProps extends ColorSchemeContextProps {
    children: React.ReactNode;
}
export declare const ColorSchemeProvider: {
    ({ colorScheme, toggleColorScheme, children, }: ColorSchemeProviderProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ColorSchemeProvider.d.ts.map