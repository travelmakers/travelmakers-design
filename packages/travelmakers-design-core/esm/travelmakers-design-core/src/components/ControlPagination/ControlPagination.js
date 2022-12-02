import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef, useState } from 'react';
import useStyles from './ControlPagination.style.js';
import { View } from '../View/View.js';
import { Image } from '../Image/Image.js';

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
let SELECTED_PAGE = 1;
const ControlPagination = forwardRef((_a, ref) => {
  var _b = _a, {
    color = "navy",
    size = "small",
    totalPage = 1,
    currentPage = 1,
    infinity = false,
    className,
    co,
    previousClick,
    nextClick,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "color",
    "size",
    "totalPage",
    "currentPage",
    "infinity",
    "className",
    "co",
    "previousClick",
    "nextClick",
    "overrideStyles"
  ]);
  useTmTheme();
  const { classes, cx } = useStyles({ color, size }, { overrideStyles, name: "ControlPagination" });
  const [selectedPage, setSelectedPage] = useState(SELECTED_PAGE);
  let previousButton = color === "navy" ? require("../../assets/svg/ic-arrow-previous-navy.svg") : require("../../assets/svg/ic-arrow-previous-white.svg");
  let nextButton = color === "navy" ? require("../../assets/svg/ic-arrow-next-navy.svg") : require("../../assets/svg/ic-arrow-next-white.svg");
  if (!infinity) {
    if (selectedPage > totalPage || selectedPage <= 1) {
      previousButton = require("../../assets/svg/ic-arrow-previous-disable.svg");
    }
    if (selectedPage >= totalPage) {
      nextButton = require("../../assets/svg/ic-arrow-next-disable.svg");
    }
  }
  const handlePreviousClick = () => {
    let page = 1;
    if (infinity) {
      if (selectedPage - 1 === 0) {
        page = totalPage;
      } else {
        page = selectedPage - 1;
      }
    } else {
      if (selectedPage - 1 === 0) {
        page = 1;
        previousButton = require("../../assets/svg/ic-arrow-previous-disable.svg");
      } else {
        page = selectedPage - 1;
      }
    }
    setSelectedPage(page);
    SELECTED_PAGE = page;
    previousClick();
  };
  const handleNextClick = () => {
    let page = 1;
    if (infinity) {
      if (selectedPage === totalPage) {
        page = 1;
      } else {
        page = selectedPage + 1;
      }
    } else {
      if (selectedPage === totalPage) {
        page = totalPage;
        nextButton = require("../../assets/svg/ic-arrow-next-disable.svg");
      } else {
        page = selectedPage + 1;
      }
    }
    setSelectedPage(page);
    SELECTED_PAGE = page;
    nextClick();
  };
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement(Image, {
    src: previousButton,
    className: cx(classes.button),
    onClick: handlePreviousClick
  }), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.indicator)
  }, selectedPage, " / ", totalPage), /* @__PURE__ */ React.createElement(Image, {
    src: nextButton,
    className: cx(classes.button),
    onClick: handleNextClick
  }));
});
ControlPagination.displayName = "@travelmakers-design/core/Header/ControlPagination";

export { ControlPagination };
//# sourceMappingURL=ControlPagination.js.map
