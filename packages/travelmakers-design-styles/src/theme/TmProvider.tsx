import React, { createContext, useContext } from "react";
import type { TmTheme, TmThemeOverride } from "./types";

import type { CSSObject } from "../tss";
import { DEFAULT_THEME } from "./defaultTheme";
import type { Options as EmotionCacheOptions } from "@emotion/cache";
import { Global } from "../tss/Global";
import { NormalizeCSS } from "./NormalizeCSS";
import { mergeTheme } from "./utils/mergeTheme";

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: TmTheme) => Record<string, CSSObject>)
>;

interface TmThemeContextType {
  theme: TmTheme;
  styles: ProviderStyles;
  emotionOptions: EmotionCacheOptions;
}

const TmThemeContext = createContext<TmThemeContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: "co", prepend: true },
});

export function useTmTheme() {
  return useContext(TmThemeContext)?.theme || DEFAULT_THEME;
}

export function useTmThemeStyles() {
  return useContext(TmThemeContext)?.styles || {};
}

export function useCoEmotionOptions(): EmotionCacheOptions {
  return (
    useContext(TmThemeContext)?.emotionOptions || { key: "co", prepend: true }
  );
}

interface TmProviderProps {
  theme?: TmThemeOverride;
  styles?: ProviderStyles;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  children: React.ReactNode;
}

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          fontFamily: theme.fontFamily,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.black
              : theme.colors.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.white
              : theme.colors.black,
          lineHeight: theme.lineHeight,
          fontSizes: theme.fontSizes.medium,
        } as any,
      })}
    />
  );
};

export const TmProvider = ({
  theme,
  styles = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  children,
}: TmProviderProps) => {
  return (
    <TmThemeContext.Provider
      value={{
        theme: mergeTheme(DEFAULT_THEME, theme),
        styles,
        emotionOptions,
      }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </TmThemeContext.Provider>
  );
};

TmProvider.displayName = "@travelmakers-design/styles/TmProvider";
