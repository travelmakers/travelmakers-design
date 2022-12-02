'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var MainReviewCard_style = require('./MainReviewCard.style.js');
var View = require('../View/View.js');
var Image = require('../Image/Image.js');
var Typography = require('../Typography/Typography.js');

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
const MainReviewCard = React.forwardRef((_a, ref) => {
  var _b = _a, { image, title, job, description, className, co, overrideStyles } = _b, props = __objRest(_b, ["image", "title", "job", "description", "className", "co", "overrideStyles"]);
  const theme = styles.useTmTheme();
  const { classes, cx } = MainReviewCard_style["default"]({}, { overrideStyles, name: "MainReviewCard" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.reviewContainer)
  }, /* @__PURE__ */ React__default.createElement(Image.Image, {
    className: cx(classes.reviewImage),
    src: image
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.descriptionWrapper)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.green2
  }, title), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy2,
    className: cx(classes.descriptionJob)
  }, job), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1
  }, description))));
});
MainReviewCard.displayName = "@travelmakers-design/core/MainReviewCard";

exports.MainReviewCard = MainReviewCard;
//# sourceMappingURL=MainReviewCard.js.map
