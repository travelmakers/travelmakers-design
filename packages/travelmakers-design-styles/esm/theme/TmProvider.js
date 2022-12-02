import React, { useContext, createContext } from 'react';
import { DEFAULT_THEME } from './defaultTheme.js';
import { Global } from '../tss/Global.js';
import { NormalizeCSS } from './NormalizeCSS.js';
import { mergeTheme } from './utils/mergeTheme.js';

const TmThemeContext = createContext({
  theme: DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: "co", prepend: true }
});
function useTmTheme() {
  var _a;
  return ((_a = useContext(TmThemeContext)) == null ? void 0 : _a.theme) || DEFAULT_THEME;
}
function useTmThemeStyles() {
  var _a;
  return ((_a = useContext(TmThemeContext)) == null ? void 0 : _a.styles) || {};
}
function useCoEmotionOptions() {
  var _a;
  return ((_a = useContext(TmThemeContext)) == null ? void 0 : _a.emotionOptions) || { key: "co", prepend: true };
}
const GlobalStyles = () => {
  return /* @__PURE__ */ React.createElement(Global, {
    styles: (theme) => ({
      "*, *::before, *::after": {
        boxSizing: "border-box"
      },
      body: {
        fontFamily: theme.fontFamily,
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.black : theme.colors.white,
        color: theme.colorScheme === "dark" ? theme.colors.white : theme.colors.black,
        lineHeight: theme.lineHeight,
        fontSizes: theme.fontSizes.b3
      }
    })
  });
};
const TmProvider = ({
  theme,
  styles = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  children
}) => {
  return /* @__PURE__ */ React.createElement(TmThemeContext.Provider, {
    value: {
      theme: mergeTheme(DEFAULT_THEME, theme),
      styles,
      emotionOptions
    }
  }, withNormalizeCSS && /* @__PURE__ */ React.createElement(NormalizeCSS, null), withGlobalStyles && /* @__PURE__ */ React.createElement(GlobalStyles, null), children);
};
TmProvider.displayName = "@travelmakers-design/styles/TmProvider";

export { TmProvider, useCoEmotionOptions, useTmTheme, useTmThemeStyles };
//# sourceMappingURL=TmProvider.js.map
