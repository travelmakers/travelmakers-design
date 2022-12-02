import React from 'react';

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
const IcChecked = (props) => {
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, /* @__PURE__ */ React.createElement("circle", {
    fill: "#30373F",
    cx: "12",
    cy: "12",
    r: "12"
  }), /* @__PURE__ */ React.createElement("path", {
    stroke: "#FFF",
    "stroke-width": "2",
    d: "m7.405 10.84 3.296 4.185 6.304-6.4"
  })));
};
IcChecked.displayName = "@travelmakers-design/core/IcChecked";

export { IcChecked };
//# sourceMappingURL=IcChecked.js.map
