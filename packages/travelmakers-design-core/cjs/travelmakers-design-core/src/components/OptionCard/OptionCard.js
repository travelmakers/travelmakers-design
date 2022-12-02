'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var OptionCard_style = require('./OptionCard.style.js');
var View = require('../View/View.js');
var Tag = require('../Tag/Tag.js');
var Typography = require('../Typography/Typography.js');
var Image = require('../Image/Image.js');
var IconTag = require('../IconTag/IconTag.js');
var Button = require('../Button/Button.js');

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
const OptionCard = React.forwardRef((_a, ref) => {
  var _b = _a, {
    labelItems = ["111", "222"],
    isPrice = true,
    isLabel = true,
    isDuration = true,
    headTitle = "Room Type",
    footerTitle = "Benefit",
    optionName = "\uC635\uC158 \uC124\uBA85",
    minNight = 0,
    maxNight = 0,
    price = 0,
    salePrice = 0,
    salePercent = 0,
    roomType,
    benefitContent = "\uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694<br /> \uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694<br /> \uD61C\uD0DD \uC124\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694<br />",
    buttonName = "\uBC84\uD2BC",
    buttonClick,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "labelItems",
    "isPrice",
    "isLabel",
    "isDuration",
    "headTitle",
    "footerTitle",
    "optionName",
    "minNight",
    "maxNight",
    "price",
    "salePrice",
    "salePercent",
    "roomType",
    "benefitContent",
    "buttonName",
    "buttonClick",
    "className",
    "co",
    "overrideStyles"
  ]);
  const theme = styles.useTmTheme();
  const { classes, cx } = OptionCard_style["default"]({}, { overrideStyles, name: "OptionCard" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.container)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex, classes.labelWrapper)
  }, isLabel && labelItems.map((item, index) => {
    return /* @__PURE__ */ React__default.createElement(Tag.Tag, {
      color: (index + 1) % 2 === 0 ? "blue" : (index + 1) % 3 === 0 ? "purple" : "green",
      fill: true,
      size: "medium",
      className: cx(classes.individualLabel)
    }, item);
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex, classes.optionWrapper)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "h5",
    color: theme.colors.navy1,
    className: cx(classes.optionText),
    strong: true
  }, optionName), isDuration && /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1
  }, "(", minNight, "\uBC15 - ", maxNight, "\uBC15)")), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1,
    strong: true
  }, headTitle), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy2,
    style: { height: "40px" }
  }, roomType), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex, classes.spaceBetween)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1,
    style: { width: "fit-content" },
    strong: true
  }, footerTitle), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1,
    style: { width: "fit-content", marginRight: "3px" }
  }, "\uB354\uBCF4\uAE30"), /* @__PURE__ */ React__default.createElement(Image.Image, {
    src: require("../../assets/svg/ic-angle.svg"),
    className: cx(classes.arrowImage)
  }))), isPrice && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1,
    style: { width: "fit-content", height: "100px" }
  }, /* @__PURE__ */ React__default.createElement("div", {
    dangerouslySetInnerHTML: { __html: benefitContent }
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.divider),
    style: {
      margin: "16px 0 12px 0"
    }
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex, classes.spaceBetween, classes.couponWrapper)
  }, /* @__PURE__ */ React__default.createElement(IconTag.IconTag, {
    fill: true
  }, "\uCFE0\uD3F0 \uC801\uC6A9\uAC00"), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.navy1,
    style: {
      width: "fit-content",
      flexShrink: 0,
      marginRight: "4px"
    }
  }, "\uC815\uAC00"), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b3",
    color: theme.colors.gray2,
    style: {
      width: "fit-content",
      flexShrink: 0,
      textDecorationLine: "line-through"
    }
  }, new Intl.NumberFormat("ko-KR").format(price), "\uC6D0"))), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex, classes.spaceBetween)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "h6",
    color: theme.colors.red2,
    style: {
      width: "fit-content",
      flexShrink: 0
    },
    strong: true
  }, salePercent, "%"), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.flex)
  }, /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "h4",
    color: theme.colors.navy1,
    style: {
      width: "fit-content",
      flexShrink: 0
    },
    strong: true
  }, new Intl.NumberFormat("ko-KR").format(salePrice)), /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    family: "Pretendard",
    level: "b2",
    color: theme.colors.navy1,
    style: {
      width: "fit-content",
      flexShrink: 0
    },
    strong: true
  }, "\uC6D0~"))))), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.footer)
  }, /* @__PURE__ */ React__default.createElement(Button.Button, {
    fullWidth: true,
    onClick: buttonClick
  }, buttonName)));
});
OptionCard.displayName = "@travelmakers-design/core/OptionCard";

exports.OptionCard = OptionCard;
//# sourceMappingURL=OptionCard.js.map
