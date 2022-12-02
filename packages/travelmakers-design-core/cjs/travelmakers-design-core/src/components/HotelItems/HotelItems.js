'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var HotelItems_style = require('./HotelItems.style.js');
var View = require('../View/View.js');
var Tag = require('../Tag/Tag.js');

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
const HotelItems = React.forwardRef((_a, ref) => {
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
  styles.useTmTheme();
  const { classes, cx } = HotelItems_style["default"]({}, { overrideStyles, name: "HotelItems" });
  const Items = () => {
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, items.map((item) => /* @__PURE__ */ React__default.createElement(Tag.Tag, {
      color: "gray",
      disabled: soldOut,
      fill,
      roundness: true,
      size: "medium"
    }, item)));
  };
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement(Items, null));
});
HotelItems.displayName = "@travelmakers-design/core/HotelItems";

exports.HotelItems = HotelItems;
//# sourceMappingURL=HotelItems.js.map
