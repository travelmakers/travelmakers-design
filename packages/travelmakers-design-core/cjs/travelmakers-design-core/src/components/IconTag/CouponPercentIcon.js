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
const CouponPercentIcon = (props) => {
  return /* @__PURE__ */ React__default.createElement("svg", __spreadValues({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React__default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M1 5.50001C2.38071 5.50001 3.5 6.6193 3.5 8.00001C3.5 9.38072 2.38071 10.5 1 10.5L1 13L15 13L15 10.5C13.6193 10.5 12.5 9.38072 12.5 8.00001C12.5 6.6193 13.6193 5.50001 15 5.50001V3L1 3L1 5.50001Z",
    fill: "#03936E"
  }), /* @__PURE__ */ React__default.createElement("circle", {
    r: "0.935672",
    transform: "matrix(1 0 0 -1 6.28567 6.28562)",
    stroke: "white",
    "stroke-width": "0.7"
  }), /* @__PURE__ */ React__default.createElement("circle", {
    r: "0.935672",
    transform: "matrix(1 0 0 -1 9.71432 9.71433)",
    stroke: "white",
    "stroke-width": "0.7"
  }), /* @__PURE__ */ React__default.createElement("path", {
    d: "M10 5H11L6 11H5L10 5Z",
    fill: "white"
  }));
};
CouponPercentIcon.displayName = "@travelmakers-design/core/CouponPercentIcon";

exports.CouponPercentIcon = CouponPercentIcon;
//# sourceMappingURL=CouponPercentIcon.js.map
