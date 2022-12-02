'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Spinner_style = require('./Spinner.style.js');
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
const Spinner = React.forwardRef((_a, ref) => {
  var _b = _a, { size = "medium", color, className, co, overrideStyles } = _b, props = __objRest(_b, ["size", "color", "className", "co", "overrideStyles"]);
  const { classes, cx } = Spinner_style["default"]({ size, color }, { overrideStyles, name: "Spinner" });
  const spinner = /* @__PURE__ */ React__default.createElement("i", {
    className: classes.inner
  }, /* @__PURE__ */ React__default.createElement("svg", {
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ React__default.createElement("g", {
    transform: "translate(1 1)"
  }, /* @__PURE__ */ React__default.createElement("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeWidth: "2"
  }, /* @__PURE__ */ React__default.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ React__default.createElement("circle", {
    cx: "36",
    cy: "18",
    r: "1"
  }, /* @__PURE__ */ React__default.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "0.9s",
    repeatCount: "indefinite"
  }))))));
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), spinner);
});
Spinner.displayName = "@travelmakers-design/core/Spinner";

exports.Spinner = Spinner;
//# sourceMappingURL=Spinner.js.map
