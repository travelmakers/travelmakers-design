import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import { BackIcon } from './BackIcon.js';
import useStyles from './HeaderSection.style.js';
import { View } from '../View/View.js';

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
const HeaderSection = forwardRef((_a, ref) => {
  var _b = _a, { size = "small", title, className, co, overrideStyles } = _b, props = __objRest(_b, ["size", "title", "className", "co", "overrideStyles"]);
  useTmTheme();
  const { classes, cx } = useStyles({ size }, { overrideStyles, name: "HeaderSection" });
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.wrapper)
  }, /* @__PURE__ */ React.createElement(BackIcon, {
    width: size === "small" ? "16px" : "24px",
    height: size === "small" ? "16px" : "24px"
  }), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.title)
  }, title)));
});
HeaderSection.displayName = "@travelmakers-design/core/Header/Section";

export { HeaderSection };
//# sourceMappingURL=HeaderSection.js.map
