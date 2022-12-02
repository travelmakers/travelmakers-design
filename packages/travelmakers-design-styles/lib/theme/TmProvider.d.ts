import React from "react";
import type { TmTheme, TmThemeOverride } from "./types";
import type { CSSObject } from "../tss";
import type { Options as EmotionCacheOptions } from "@emotion/cache";
declare type ProviderStyles = Record<string, Record<string, CSSObject> | ((theme: TmTheme) => Record<string, CSSObject>)>;
export declare function useTmTheme(): TmTheme;
export declare function useTmThemeStyles(): ProviderStyles;
export declare function useCoEmotionOptions(): EmotionCacheOptions;
interface TmProviderProps {
    theme?: TmThemeOverride;
    styles?: ProviderStyles;
    emotionOptions?: EmotionCacheOptions;
    withNormalizeCSS?: boolean;
    withGlobalStyles?: boolean;
    children: React.ReactNode;
}
export declare const TmProvider: {
    ({ theme, styles, emotionOptions, withNormalizeCSS, withGlobalStyles, children, }: TmProviderProps): JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=TmProvider.d.ts.map