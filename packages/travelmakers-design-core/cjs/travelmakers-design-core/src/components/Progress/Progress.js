'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var Progress_style = require('./Progress.style.js');
var View = require('../View/View.js');
var Indicator = require('../Indicator/Indicator.js');

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
const Progress = React.forwardRef((_a, ref) => {
  var _b = _a, {
    color = "navy",
    indicator = false,
    size = "large",
    totalPage = 1,
    currentPage = 1,
    activeBarTransition = false,
    title,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "color",
    "indicator",
    "size",
    "totalPage",
    "currentPage",
    "activeBarTransition",
    "title",
    "className",
    "co",
    "overrideStyles"
  ]);
  styles.useTmTheme();
  const { classes, cx } = Progress_style["default"]({ color, indicator, size }, { overrideStyles, name: "Progress" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), indicator && /* @__PURE__ */ React__default.createElement(Indicator.Indicator, {
    currentPage,
    totalPage,
    color,
    size,
    className: cx(classes.indicator)
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.barContainer)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.barActive),
    style: {
      width: `${currentPage / totalPage * 100}%`,
      transition: activeBarTransition ? "width 3s linear" : "none"
    }
  })));
});
Progress.displayName = "@travelmakers-design/core/Progress";

exports.Progress = Progress;
//# sourceMappingURL=Progress.js.map
