'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var CarouselTitleCard_style = require('./CarouselTitleCard.style.js');
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
const CarouselTitleCard = React.forwardRef((_a, ref) => {
  var _b = _a, {
    newBadge = false,
    subHeadline,
    headline,
    description,
    title,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "newBadge",
    "subHeadline",
    "headline",
    "description",
    "title",
    "className",
    "co",
    "overrideStyles"
  ]);
  const theme = styles.useTmTheme();
  const { classes, cx } = CarouselTitleCard_style["default"]({}, { overrideStyles, name: "CarouselTitleCard" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), newBadge && /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.newBadge)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "PT Serif",
    level: "h4",
    mobileLevel: "h6",
    color: theme.colors.white,
    textAlign: "center",
    style: { width: "100%" }
  }, "New")), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.headlineWrapper)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Noto Serif KR",
    level: "h6",
    mobileLevel: "b3",
    color: theme.colors.navy1,
    className: cx(classes.subHeadline)
  }, subHeadline), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Noto Serif KR",
    level: "h2",
    mobileLevel: "h6",
    color: theme.colors.navy1,
    className: cx(classes.headline),
    strong: true
  }, headline), /* @__PURE__ */ React__default.createElement("div", {
    style: { display: "flex", justifyContent: "space-between" }
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "h6",
    mobileLevel: "b3",
    color: theme.colors.green3,
    className: cx(classes.description),
    strong: true
  }, description), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.goImageflexBox)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "PT Serif",
    level: "h4",
    mobileLevel: "b2",
    style: { width: "auto", lineHeight: "24px" },
    color: theme.colors.navy1
  }, "Go"), /* @__PURE__ */ React__default.createElement(Image.Image, {
    src: require("../../assets/svg/ic-arrow-single.svg"),
    className: cx(classes.arrowImage)
  })))));
});
CarouselTitleCard.displayName = "@travelmakers-design/core/CarouselTitleCard";

exports.CarouselTitleCard = CarouselTitleCard;
//# sourceMappingURL=CarouselTitleCard.js.map
