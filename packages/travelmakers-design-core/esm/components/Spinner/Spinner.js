import React, { forwardRef } from 'react';
import useStyles from './Spinner.style.js';
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
const Spinner = forwardRef((_a, ref) => {
  var _b = _a, { size = "medium", color, className, co, overrideStyles } = _b, props = __objRest(_b, ["size", "color", "className", "co", "overrideStyles"]);
  const { classes, cx } = useStyles({ size, color }, { overrideStyles, name: "Spinner" });
  const spinner = /* @__PURE__ */ React.createElement("i", {
    className: classes.inner
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(1 1)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeWidth: "2"
  }, /* @__PURE__ */ React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ React.createElement("circle", {
    cx: "36",
    cy: "18",
    r: "1"
  }, /* @__PURE__ */ React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  }))))));
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), spinner);
});
Spinner.displayName = "@travelmakers-design/core/Spinner";

export { Spinner };
//# sourceMappingURL=Spinner.js.map
