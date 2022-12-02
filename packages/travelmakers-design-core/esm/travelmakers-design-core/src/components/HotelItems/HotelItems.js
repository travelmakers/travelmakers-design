import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './HotelItems.style.js';
import { View } from '../View/View.js';
import { Tag } from '../Tag/Tag.js';

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
const HotelItems = forwardRef((_a, ref) => {
  var _b = _a, {
    items = [],
    soldOut = false,
    fill = false,
    title,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "items",
    "soldOut",
    "fill",
    "title",
    "className",
    "co",
    "overrideStyles"
  ]);
  useTmTheme();
  const { classes, cx } = useStyles({}, { overrideStyles, name: "HotelItems" });
  const Items = () => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, items.map((item) => /* @__PURE__ */ React.createElement(Tag, {
      color: "gray",
      disabled: soldOut,
      fill,
      roundness: true,
      size: "medium"
    }, item)));
  };
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement(Items, null));
});
HotelItems.displayName = "@travelmakers-design/core/HotelItems";

export { HotelItems };
//# sourceMappingURL=HotelItems.js.map
