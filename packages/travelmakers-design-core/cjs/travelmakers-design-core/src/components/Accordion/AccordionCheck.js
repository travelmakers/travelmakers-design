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
const AccordionCheck = (props) => {
  return /* @__PURE__ */ React__default.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React__default.createElement("rect", {
    width: "24",
    height: "24",
    rx: "12",
    fill: "#D7D7D7"
  }), /* @__PURE__ */ React__default.createElement("path", {
    d: "M6 10.7681L10.1205 16L18 8",
    stroke: "white",
    "stroke-width": "2"
  }));
};
AccordionCheck.displayName = "@travelmakers-design/core/AccordionCheck";

exports.AccordionCheck = AccordionCheck;
//# sourceMappingURL=AccordionCheck.js.map
