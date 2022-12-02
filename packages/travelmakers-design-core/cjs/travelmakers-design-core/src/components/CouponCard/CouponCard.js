'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var CouponCard_style = require('./CouponCard.style.js');
var View = require('../View/View.js');
var Typography = require('../Typography/Typography.js');
var Image = require('../Image/Image.js');

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
const CouponCard = React.forwardRef((_a, ref) => {
  var _b = _a, {
    state = "default",
    type = "Week",
    day = 1,
    saleMoney = "00",
    couponName,
    couponObject,
    description,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "state",
    "type",
    "day",
    "saleMoney",
    "couponName",
    "couponObject",
    "description",
    "className",
    "co",
    "overrideStyles"
  ]);
  const theme = styles.useTmTheme();
  const { classes, cx } = CouponCard_style["default"]({ state, type }, { overrideStyles, name: "CouponCard" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.labelContainer)
  }, type !== "All" && /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Noto Serif KR",
    level: "h2",
    color: theme.colors.white,
    strong: true
  }, day), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Noto Serif KR",
    level: type !== "All" ? "b1" : "h2",
    color: theme.colors.white
  }, type)), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.contentContainer)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex, classes.spaceBetween)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Noto Serif KR",
    level: "h6",
    color: theme.colors.green3,
    style: { width: "fit-content", marginBottom: "4px" },
    strong: true
  }, saleMoney, "%"), state === "default" ? /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy3,
    style: { width: "fit-content" }
  }, "\uC801\uC6A9\uC911") : state === "applied" && /* @__PURE__ */ React__default.createElement(Image.Image, {
    src: require("../../assets/svg/ic-check.svg"),
    alt: "check"
  })), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1
  }, couponName), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "caption",
    color: theme.colors.red3,
    style: { width: "fit-content", marginBottom: "4px" }
  }, couponObject), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "caption",
    color: theme.colors.navy3
  }, description))));
});
CouponCard.displayName = "@travelmakers-design/core/CouponCard";

exports.CouponCard = CouponCard;
//# sourceMappingURL=CouponCard.js.map
