'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ColorSchemeContext = React.createContext(null);
const useTmColorScheme = () => {
  const ctx = React.useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");
  }
  return ctx;
};
const ColorSchemeProvider = ({
  colorScheme,
  toggleColorScheme,
  children
}) => {
  const [key, setKey] = React.useState("init");
  React.useEffect(() => {
    setKey("update");
  }, []);
  return /* @__PURE__ */ React__default.createElement(ColorSchemeContext.Provider, {
    key,
    value: { colorScheme, toggleColorScheme }
  }, children);
};
ColorSchemeProvider.displayName = "@travelmakers-design/styles/ColorSchemeProvider";

exports.ColorSchemeProvider = ColorSchemeProvider;
exports.useTmColorScheme = useTmColorScheme;
//# sourceMappingURL=ColorSchemeProvider.js.map
