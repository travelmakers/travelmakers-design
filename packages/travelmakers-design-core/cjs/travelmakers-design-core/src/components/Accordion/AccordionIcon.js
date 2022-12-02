'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
const AccordionIcon = (props) => {
  return /* @__PURE__ */ React__default.createElement("svg", __spreadValues({
    width: "33",
    height: "32",
    viewBox: "0 0 33 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React__default.createElement("path", {
    stroke: "#30373F",
    "stroke-width": "2",
    d: "m3 9 13 14L29 9",
    fill: "none",
    "fill-rule": "evenodd"
  }));
};
AccordionIcon.displayName = "@travelmakers-design/core/AccordionIcon";

exports.AccordionIcon = AccordionIcon;
//# sourceMappingURL=AccordionIcon.js.map
