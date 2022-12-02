'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var CouponPercent = require('./CouponPercent.js');
var Price_style = require('./Price.style.js');
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
const Price = React.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "primary",
    label = "",
    percentText = "",
    nightText = "",
    priceText,
    priceStartText = "",
    percentBool = true,
    nightBool = true,
    priceBool = true,
    priceStartBool = true,
    couponBool = true,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "type",
    "label",
    "percentText",
    "nightText",
    "priceText",
    "priceStartText",
    "percentBool",
    "nightBool",
    "priceBool",
    "priceStartBool",
    "couponBool",
    "className",
    "co",
    "overrideStyles"
  ]);
  styles.useTmTheme();
  const { classes, cx } = Price_style["default"]({ type }, { overrideStyles, name: "Price" });
  const Primary = () => {
    return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
      ref,
      className: cx(classes.root, className),
      co
    }, props), percentBool && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.percentText)
    }, percentText, "%"), nightBool && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.nightText)
    }, nightText), priceBool && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.priceText)
    }, priceText.toLocaleString("ko")), /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.priceBeforeText)
    }, "\uC6D0~")), priceStartBool && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.priceStartText)
    }, "| ", priceStartText));
  };
  const Secondary = () => {
    return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
      ref,
      className: cx(classes.root, className),
      co
    }, props), label && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.labelSecondary)
    }, label, "%"), nightBool && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.nightSecondaryText)
    }, nightText), priceBool && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.priceSecondaryText)
    }, priceText.toLocaleString("ko")), /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.priceBeforeSecondaryText)
    }, "\uC6D0")), couponBool && /* @__PURE__ */ React__default.createElement("div", {
      className: cx(classes.couponWrap)
    }, /* @__PURE__ */ React__default.createElement(CouponPercent.CouponPercent, {
      style: { margin: "0 4px" }
    }), /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.couponWord)
    }, "\uCFE0\uD3F0 \uC801\uC6A9\uAC00")));
  };
  return type === "primary" ? /* @__PURE__ */ React__default.createElement(Primary, null) : /* @__PURE__ */ React__default.createElement(Secondary, null);
});
Price.displayName = "@travelmakers-design/core/Price";

exports.Price = Price;
//# sourceMappingURL=Price.js.map
