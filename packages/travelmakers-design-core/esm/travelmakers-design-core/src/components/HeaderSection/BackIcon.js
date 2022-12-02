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
const BackIcon = (props) => {
  var _a, _b;
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ React.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, /* @__PURE__ */ React.createElement("path", {
    stroke: (_a = props.color) != null ? _a : "#FFF",
    d: "M12 22.5 1.5 12 12 1.5"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: (_b = props.color) != null ? _b : "#FFF",
    d: "M2.25 11.5h21v1h-21z"
  })));
};
BackIcon.displayName = "@travelmakers-design/core/BackIcon";

export { BackIcon };
//# sourceMappingURL=BackIcon.js.map
