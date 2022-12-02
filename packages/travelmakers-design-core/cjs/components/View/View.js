'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function extractCo(co, theme) {
  return typeof co === "function" ? co(theme) : co;
}
function useBoxCo(co, className) {
  const { css, cx } = styles.useCss();
  const theme = styles.useTmTheme();
  if (Array.isArray(co)) {
    return cx(className, co.map((partial) => css(extractCo(partial, theme))));
  }
  return cx(className, css(extractCo(co, theme)));
}
const View = React.forwardRef((_a, ref) => {
  var _b = _a, { component, className, style, co } = _b, props = __objRest(_b, ["component", "className", "style", "co"]);
  const Element = component || "div";
  return /* @__PURE__ */ React__default.createElement(Element, __spreadValues({
    ref,
    className: useBoxCo(co, className),
    style
  }, props));
});
View.displayName = "@travelmakers-design/core/View";

exports.View = View;
//# sourceMappingURL=View.js.map