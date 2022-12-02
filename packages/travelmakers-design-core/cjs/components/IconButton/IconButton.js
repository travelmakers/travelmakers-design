'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var IconButton_style = require('./IconButton.style.js');
var View = require('../View/View.js');

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
const IconButton = React.forwardRef((_a, ref) => {
  var _b = _a, {
    children,
    component,
    size = "medium",
    variant: _variant,
    line,
    type = "button",
    disabled = false,
    roundness = false,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "children",
    "component",
    "size",
    "variant",
    "line",
    "type",
    "disabled",
    "roundness",
    "className",
    "co",
    "overrideStyles"
  ]);
  const { classes, cx } = IconButton_style["default"]({
    variant: _variant,
    size,
    line,
    roundness
  }, { overrideStyles, name: "Button" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    component: component || "button",
    className: cx(classes.root, classes[line ? "ghost" : "solid"], className),
    type,
    disabled,
    ref,
    onTouchStart: () => {
    },
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner
  }, children));
});
IconButton.displayName = "@travelmakers-design/core/IconButton";

exports.IconButton = IconButton;
//# sourceMappingURL=IconButton.js.map
