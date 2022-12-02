'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var HeaderPage_style = require('./HeaderPage.style.js');
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
const HeaderPage = React.forwardRef((_a, ref) => {
  var _b = _a, {
    size = "small",
    color = "navy",
    title,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "size",
    "color",
    "title",
    "className",
    "co",
    "overrideStyles"
  ]);
  styles.useTmTheme();
  const { classes, cx } = HeaderPage_style["default"]({ size, color }, { overrideStyles, name: "HeaderPage" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.titleWrapper)
  }, /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.title)
  }, title), /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.divider)
  })));
});
HeaderPage.displayName = "@travelmakers-design/core/Header/Section";

exports.HeaderPage = HeaderPage;
//# sourceMappingURL=HeaderPage.js.map
