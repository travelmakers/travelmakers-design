import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import { CouponPercent } from './CouponPercent.js';
import useStyles from './Price.style.js';
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
const Price = forwardRef((_a, ref) => {
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
  useTmTheme();
  const { classes, cx } = useStyles({ type }, { overrideStyles, name: "Price" });
  const Primary = () => {
    return /* @__PURE__ */ React.createElement(View, __spreadValues({
      ref,
      className: cx(classes.root, className),
      co
    }, props), percentBool && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.percentText)
    }, percentText, "%"), nightBool && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.nightText)
    }, nightText), priceBool && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.priceText)
    }, priceText.toLocaleString("ko")), /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.priceBeforeText)
    }, "\uC6D0~")), priceStartBool && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.priceStartText)
    }, "| ", priceStartText));
  };
  const Secondary = () => {
    return /* @__PURE__ */ React.createElement(View, __spreadValues({
      ref,
      className: cx(classes.root, className),
      co
    }, props), label && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.labelSecondary)
    }, label, "%"), nightBool && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.nightSecondaryText)
    }, nightText), priceBool && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.priceSecondaryText)
    }, priceText.toLocaleString("ko")), /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.priceBeforeSecondaryText)
    }, "\uC6D0")), couponBool && /* @__PURE__ */ React.createElement("div", {
      className: cx(classes.couponWrap)
    }, /* @__PURE__ */ React.createElement(CouponPercent, {
      style: { margin: "0 4px" }
    }), /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.couponWord)
    }, "\uCFE0\uD3F0 \uC801\uC6A9\uAC00")));
  };
  return type === "primary" ? /* @__PURE__ */ React.createElement(Primary, null) : /* @__PURE__ */ React.createElement(Secondary, null);
});
Price.displayName = "@travelmakers-design/core/Price";

export { Price };
//# sourceMappingURL=Price.js.map
