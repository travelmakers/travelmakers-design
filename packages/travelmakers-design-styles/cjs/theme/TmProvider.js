'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var defaultTheme = require('./defaultTheme.js');
var Global = require('../tss/Global.js');
var NormalizeCSS = require('./NormalizeCSS.js');
var mergeTheme = require('./utils/mergeTheme.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TmThemeContext = React.createContext({
  theme: defaultTheme.DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: "co", prepend: true }
});
function useTmTheme() {
  var _a;
  return ((_a = React.useContext(TmThemeContext)) == null ? void 0 : _a.theme) || defaultTheme.DEFAULT_THEME;
}
function useTmThemeStyles() {
  var _a;
  return ((_a = React.useContext(TmThemeContext)) == null ? void 0 : _a.styles) || {};
}
function useCoEmotionOptions() {
  var _a;
  return ((_a = React.useContext(TmThemeContext)) == null ? void 0 : _a.emotionOptions) || { key: "co", prepend: true };
}
const GlobalStyles = () => {
  return /* @__PURE__ */ React__default.createElement(Global.Global, {
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
  return /* @__PURE__ */ React__default.createElement(TmThemeContext.Provider, {
    value: {
      theme: mergeTheme.mergeTheme(defaultTheme.DEFAULT_THEME, theme),
      styles,
      emotionOptions
    }
  }, withNormalizeCSS && /* @__PURE__ */ React__default.createElement(NormalizeCSS.NormalizeCSS, null), withGlobalStyles && /* @__PURE__ */ React__default.createElement(GlobalStyles, null), children);
};
TmProvider.displayName = "@travelmakers-design/styles/TmProvider";

exports.TmProvider = TmProvider;
exports.useCoEmotionOptions = useCoEmotionOptions;
exports.useTmTheme = useTmTheme;
exports.useTmThemeStyles = useTmThemeStyles;
//# sourceMappingURL=TmProvider.js.map
