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
const IcDropDown = (props) => {
  return /* @__PURE__ */ React__default.createElement("svg", __spreadValues({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React__default.createElement("path", {
    d: "M2.423 5.587 9 12.573l6.577-6.986",
    stroke: "#30373F",
    fill: "none",
    "fill-rule": "evenodd",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
};
IcDropDown.displayName = "@travelmakers-design/core/IcDropDown";

exports.IcDropDown = IcDropDown;
//# sourceMappingURL=IcDropDown.js.map
