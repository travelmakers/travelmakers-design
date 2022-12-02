import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './HotelLabelType.style.js';
import { View } from '../View/View.js';
import { Image } from '../Image/Image.js';
import { Typography } from '../Typography/Typography.js';

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
const HotelLabelType = forwardRef((_a, ref) => {
  var _b = _a, {
    type = "navy",
    soldOut = false,
    title,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "type",
    "soldOut",
    "title",
    "className",
    "co",
    "overrideStyles"
  ]);
  const theme = useTmTheme();
  const { classes, cx } = useStyles({}, { overrideStyles, name: "HotelLabelType" });
  const HotelLabelType2 = ({ type: type2 }) => {
    switch (type2) {
      case "hotel-mini":
        return /* @__PURE__ */ React.createElement(MiniHotelImage, null);
      case "residence":
        return /* @__PURE__ */ React.createElement(ResidenceHotelImage, null);
      default:
        return /* @__PURE__ */ React.createElement(DefaultImage, null);
    }
  };
  const DefaultImage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Image, {
    src: require("../../assets/svg/ic-star.svg"),
    className: cx(classes.textImage),
    height: "16px"
  }), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: soldOut ? theme.colors.gray4 : theme.colors.navy2
  }, "5\uC131\uAE09 | \uD638\uD154"));
  const MiniHotelImage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Image, {
    src: require("../../assets/svg/ic-mini.svg"),
    className: cx(classes.textImage),
    height: "16px"
  }), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: soldOut ? theme.colors.gray4 : theme.colors.navy2
  }, "| \uBBF8\uB2C8 \uD638\uD154"));
  const ResidenceHotelImage = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Image, {
    src: require("../../assets/svg/ic-residence.svg"),
    className: cx(classes.textImage),
    height: "16px"
  }), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: soldOut ? theme.colors.gray4 : theme.colors.navy2
  }, "| \uB808\uC9C0\uB358\uC2A4 \uD638\uD154"));
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement(HotelLabelType2, {
    type
  }));
});
HotelLabelType.displayName = "@travelmakers-design/core/HotelLabelType";

export { HotelLabelType };
//# sourceMappingURL=HotelLabelType.js.map
