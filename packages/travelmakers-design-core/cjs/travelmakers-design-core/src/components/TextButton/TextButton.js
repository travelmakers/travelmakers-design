'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var TextButton_style = require('./TextButton.style.js');
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
const TextButton = React.forwardRef((_a, ref) => {
  var _b = _a, {
    children,
    component,
    family = "Pretendard",
    size = "medium",
    color: _color = "navy",
    fullWidth = false,
    type = "button",
    disabled = false,
    underline = false,
    leftIcon,
    rightIcon,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "children",
    "component",
    "family",
    "size",
    "color",
    "fullWidth",
    "type",
    "disabled",
    "underline",
    "leftIcon",
    "rightIcon",
    "className",
    "co",
    "overrideStyles"
  ]);
  styles.useTmTheme();
  const { classes, cx } = TextButton_style["default"]({
    color: _color,
    size,
    fullWidth,
    family,
    underline,
    leftIcon,
    rightIcon
  }, { overrideStyles, name: "Button" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    component: component || "button",
    ref,
    type,
    disabled,
    className: cx(classes.root, classes["solid"], className),
    co,
    onTouchStart: () => {
    }
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner
  }, leftIcon && /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.icon, classes.leftIcon)
  }, leftIcon, "\xA0"), /* @__PURE__ */ React__default.createElement("span", {
    className: classes.label
  }, children), rightIcon && /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.icon, classes.rightIcon)
  }, "\xA0", rightIcon)));
});
TextButton.displayName = "@travelmakers-design/core/TextButton";

exports.TextButton = TextButton;
//# sourceMappingURL=TextButton.js.map
