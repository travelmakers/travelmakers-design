import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './MainReviewCard.style.js';
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
const MainReviewCard = forwardRef((_a, ref) => {
  var _b = _a, { image, title, job, description, className, co, overrideStyles } = _b, props = __objRest(_b, ["image", "title", "job", "description", "className", "co", "overrideStyles"]);
  const theme = useTmTheme();
  const { classes, cx } = useStyles({}, { overrideStyles, name: "MainReviewCard" });
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.reviewContainer)
  }, /* @__PURE__ */ React.createElement(Image, {
    className: cx(classes.reviewImage),
    src: image
  }), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.descriptionWrapper)
  }, /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.green2
  }, title), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy2,
    className: cx(classes.descriptionJob)
  }, job), /* @__PURE__ */ React.createElement(Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1
  }, description))));
});
MainReviewCard.displayName = "@travelmakers-design/core/MainReviewCard";

export { MainReviewCard };
//# sourceMappingURL=MainReviewCard.js.map
