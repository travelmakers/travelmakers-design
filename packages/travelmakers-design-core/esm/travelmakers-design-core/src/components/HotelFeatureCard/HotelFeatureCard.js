import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './HotelFeatureCard.style.js';
import { View } from '../View/View.js';
import { Tag } from '../Tag/Tag.js';
import { Typography } from '../Typography/Typography.js';
import { Image } from '../Image/Image.js';
import { HotelItems } from '../HotelItems/HotelItems.js';
import { HotelLabelType } from '../HotelLabelType/HotelLabelType.js';
import { IconTag } from '../IconTag/IconTag.js';
import { Price } from '../Price/Price.js';

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
const HotelFeatureCard = forwardRef((_a, ref) => {
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
  const theme = useTmTheme();
  const { classes, cx } = useStyles({}, { overrideStyles, name: "HotelFeatureCard" });
  const SaleTextBox = ({ children }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.flexBox, classes.labelBox)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1,
    className: cx(classes.label, classes.textNavy1)
  }, percentText && "\uC815\uAC00"), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1,
    className: cx(classes.label, classes.textNavy1)
  }, beforePrice), couponBoolean && /* @__PURE__ */ React.createElement(IconTag, {
    fill: true
  }, "\uCFE0\uD3F0 \uC801\uC6A9\uAC00")), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.flexBox, classes.priceBox)
  }, /* @__PURE__ */ React.createElement(Price, {
    couponBool: true,
    percentBool: !!percentText,
    priceBool: !!priceText,
    nightBool: false,
    percentText,
    priceStartBool: !!startPrice,
    priceStartText: startPrice,
    priceText,
    type: "primary"
  }), children));
  const SoldOutBox = () => /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.sellout)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.gray4,
    className: cx(classes.label)
  }, "\uD310\uB9E4\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.cardContainer)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.imageWrapper)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.flexBox, classes.spaceBetweenBox, classes.groupLabel)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.flexBox)
  }, hotelItems.map((item, index) => {
    return /* @__PURE__ */ React.createElement(Tag, {
      color: (index + 1) % 2 === 0 ? "blue" : (index + 1) % 3 === 0 ? "purple" : "green",
      fill: true,
      size: "medium",
      className: cx(classes.individualLabel)
    }, item);
  })), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.addressBox)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b1",
    color: "rgba(255, 255, 255, 0.8)"
  }, addressText)))), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.cardImageBox)
  }, /* @__PURE__ */ React.createElement(Image, {
    className: cx(classes.image),
    src: hotelImage,
    height: "100%"
  }, soldOut && /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.soldOutBox)
  }, /* @__PURE__ */ React.createElement("b", null, "Sold Out"), /* @__PURE__ */ React.createElement("small", null, "\uB2E4\uC74C\uC5D0 \uB9CC\uB098\uC694")))), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.bottomSection)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.timer)
  }, "timer"), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.textWrapper)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.flexBox, classes.tagBox)
  }, /* @__PURE__ */ React.createElement(HotelItems, {
    items: timelineTags,
    soldOut,
    fill: false
  })), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "h4",
    mobileLevel: "b2",
    style: { marginTop: "12px" },
    color: soldOut ? theme.colors.gray4 : theme.colors.navy1,
    strong: true
  }, hotelName), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.flexBox, classes.labelImageBox)
  }, /* @__PURE__ */ React.createElement(HotelLabelType, {
    type,
    soldOut
  })), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.divider)
  }), soldOut ? /* @__PURE__ */ React.createElement(SoldOutBox, null) : /* @__PURE__ */ React.createElement(SaleTextBox, null, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.goImageflexBox)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "PT Serif",
    level: "h4",
    mobileLevel: "b2",
    style: { width: "auto", lineHeight: "24px" },
    color: theme.colors.navy1
  }, "Go"), /* @__PURE__ */ React.createElement(Image, {
    src: require("../../assets/svg/ic-arrow-single.svg"),
    className: cx(classes.arrowImage)
  })))))));
});
HotelFeatureCard.displayName = "@travelmakers-design/core/Header/Section";

export { HotelFeatureCard };
//# sourceMappingURL=HotelFeatureCard.js.map
