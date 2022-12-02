'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var HotelCard_style = require('./HotelCard.style.js');
var View = require('../View/View.js');
var Tag = require('../Tag/Tag.js');
var Typography = require('../Typography/Typography.js');
var Image = require('../Image/Image.js');
var HotelLabelType = require('../HotelLabelType/HotelLabelType.js');
var HotelItems = require('../HotelItems/HotelItems.js');
var IconTag = require('../IconTag/IconTag.js');
var Price = require('../Price/Price.js');

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
const HotelCard = React.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "default",
    hotelImage,
    hotelItems = [],
    addressText,
    hotelName,
    percentText,
    beforePrice,
    startPrice,
    priceText,
    couponBoolean = false,
    coupons,
    timelineTags,
    soldOut = false,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "type",
    "hotelImage",
    "hotelItems",
    "addressText",
    "hotelName",
    "percentText",
    "beforePrice",
    "startPrice",
    "priceText",
    "couponBoolean",
    "coupons",
    "timelineTags",
    "soldOut",
    "className",
    "co",
    "overrideStyles"
  ]);
  const theme = styles.useTmTheme();
  const { classes, cx } = HotelCard_style["default"]({}, { overrideStyles, name: "HotelCard" });
  const SaleTextBox = () => /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flexBox, classes.labelBox)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1,
    className: cx(classes.label, classes.textNavy1)
  }, percentText && "\uC815\uAC00"), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1,
    className: cx(classes.label, classes.textNavy1)
  }, beforePrice), couponBoolean && /* @__PURE__ */ React__default.createElement(IconTag.IconTag, {
    fill: true
  }, "\uCFE0\uD3F0 \uC801\uC6A9\uAC00")), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flexBox, classes.priceBox)
  }, /* @__PURE__ */ React__default.createElement(Price.Price, {
    couponBool: true,
    percentBool: !!percentText,
    priceBool: !!priceText,
    nightBool: false,
    percentText,
    priceStartBool: !!startPrice,
    priceStartText: startPrice,
    priceText,
    type: "primary"
  })));
  const SoldOutBox = () => /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.sellout)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.gray4,
    className: cx(classes.label)
  }, "\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.cardContainer)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.imageWrapper)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flexBox, classes.spaceBetweenBox, classes.groupLabel)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flexBox)
  }, hotelItems.map((item, index) => {
    return /* @__PURE__ */ React__default.createElement(Tag.Tag, {
      color: (index + 1) % 2 === 0 ? "blue" : (index + 1) % 3 === 0 ? "purple" : "green",
      fill: true,
      size: "medium",
      className: cx(classes.individualLabel)
    }, item);
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.addressBox)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b1",
    color: "rgba(255, 255, 255, 0.8)"
  }, addressText))), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.cardImageBox)
  }, /* @__PURE__ */ React__default.createElement(Image.Image, {
    className: cx(classes.image),
    src: hotelImage,
    height: "100%"
  }, soldOut && /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.soldOutBox)
  }, /* @__PURE__ */ React__default.createElement("b", null, "Sold Out"), /* @__PURE__ */ React__default.createElement("small", null, "\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694"))))), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.textWrapper)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "h4",
    mobileLevel: "b2",
    color: soldOut ? theme.colors.gray4 : theme.colors.navy1,
    strong: true
  }, hotelName), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flexBox, classes.labelImageBox)
  }, /* @__PURE__ */ React__default.createElement(HotelLabelType.HotelLabelType, {
    type,
    soldOut
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.divider)
  }), soldOut ? /* @__PURE__ */ React__default.createElement(SoldOutBox, null) : /* @__PURE__ */ React__default.createElement(SaleTextBox, null), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flexBox, classes.tagBox)
  }, /* @__PURE__ */ React__default.createElement(HotelItems.HotelItems, {
    items: timelineTags,
    soldOut,
    fill: true
  })))));
});
HotelCard.displayName = "@travelmakers-design/core/Header/Section";

exports.HotelCard = HotelCard;
//# sourceMappingURL=HotelCard.js.map
