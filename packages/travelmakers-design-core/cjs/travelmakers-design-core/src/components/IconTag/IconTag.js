'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var CouponPercentIcon = require('./CouponPercentIcon.js');
var IconTag_style = require('./IconTag.style.js');

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
const IconTag = React.forwardRef((_a, ref) => {
  var _b = _a, {
    component,
    fill = false,
    children,
    className,
    overrideStyles,
    __staticSelector = "span"
  } = _b, props = __objRest(_b, [
    "component",
    "fill",
    "children",
    "className",
    "overrideStyles",
    "__staticSelector"
  ]);
  const Element = component || "span";
  const { classes, cx } = IconTag_style["default"]({ fill }, { overrideStyles, name: "span" });
  return /* @__PURE__ */ React__default.createElement(Element, __spreadValues({
    ref,
    className: cx(classes.container, !fill && classes["line"], className)
  }, props), /* @__PURE__ */ React__default.createElement(CouponPercentIcon.CouponPercentIcon, null), children);
});
IconTag.displayName = "@travelmakers-design/core/IconTag";

exports.IconTag = IconTag;
//# sourceMappingURL=IconTag.js.map
