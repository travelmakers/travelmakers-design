import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './HotelReviewCard.style.js';
import { View } from '../View/View.js';
import { Typography } from '../Typography/Typography.js';
import { Image } from '../Image/Image.js';
import { HotelItems } from '../HotelItems/HotelItems.js';

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
const HotelReviewCard = forwardRef((_a, ref) => {
  var _b = _a, {
    hotelImage,
    tags,
    content,
    reviewName,
    hotelOption,
    title,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "hotelImage",
    "tags",
    "content",
    "reviewName",
    "hotelOption",
    "title",
    "className",
    "co",
    "overrideStyles"
  ]);
  const theme = useTmTheme();
  const { classes, cx } = useStyles({}, { overrideStyles, name: "HotelReviewCard" });
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.contentWrapper)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.headerBox)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy3,
    className: cx(classes.text)
  }, "\uC774\uB7F0 \uC810\uC774 \uC88B\uC558\uC5B4\uC694."), /* @__PURE__ */ React.createElement(Image, {
    src: require("../../assets/svg/ic-angle.svg"),
    className: cx(classes.arrowImage)
  })), /* @__PURE__ */ React.createElement(HotelItems, {
    items: tags,
    fill: true,
    className: cx(classes.tagList)
  }), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.contentBox)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b1",
    color: theme.colors.navy3,
    className: cx(classes.content)
  }, content), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.mobileImageWrapper)
  }, /* @__PURE__ */ React.createElement(Image, {
    src: hotelImage,
    width: 40,
    height: 40
  }))), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1
  }, reviewName, "\uB2D8\uC758 \uB9AC\uBDF0", hotelOption && /* @__PURE__ */ React.createElement("span", {
    style: { color: theme.colors.navy3, marginLeft: "9px" }
  }, "\uC0C1\uD488 \uC635\uC158 : ", hotelOption)))), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.image, classes.imageWrapper)
  }, /* @__PURE__ */ React.createElement(Image, {
    src: hotelImage,
    width: 145,
    height: 145
  })));
});
HotelReviewCard.displayName = "@travelmakers-design/core/HotelReviewCard";

export { HotelReviewCard };
//# sourceMappingURL=HotelReviewCard.js.map
