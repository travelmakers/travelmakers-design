import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './Input.style.js';
import { View } from '../View/View.js';
import { Typography } from '../Typography/Typography.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const Input = forwardRef((_a, ref) => {
  var _b = _a, {
    component,
    width,
    label,
    description,
    descriptionType = "description",
    icon,
    rightSectionWidth = 48,
    rightSection,
    rightSectionProps = {},
    wrapperProps,
    invalid = false,
    required = false,
    disabled = false,
    multiline = false,
    roundness = false,
    className,
    style,
    co,
    overrideStyles,
    __staticSelector = "Input"
  } = _b, props = __objRest(_b, [
    "component",
    "width",
    "label",
    "description",
    "descriptionType",
    "icon",
    "rightSectionWidth",
    "rightSection",
    "rightSectionProps",
    "wrapperProps",
    "invalid",
    "required",
    "disabled",
    "multiline",
    "roundness",
    "className",
    "style",
    "co",
    "overrideStyles",
    "__staticSelector"
  ]);
  const theme = useTmTheme();
  const { classes, cx } = useStyles({ roundness, multiline, invalid, width, descriptionType }, { overrideStyles, name: __staticSelector });
  const Element = component || "input";
  return /* @__PURE__ */ React.createElement(View, {
    style: { width: width ? `${width}px` : "100%" }
  }, label && /* @__PURE__ */ React.createElement(Typography, {
    level: "b2",
    family: "Pretendard",
    color: theme.colors.gray1,
    style: { marginBottom: 4 }
  }, label), /* @__PURE__ */ React.createElement(View, __spreadValues({
    className: cx(classes.wrapper, className),
    co,
    style
  }, wrapperProps), icon && /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.icon, { [classes.disabled]: disabled })
  }, icon), /* @__PURE__ */ React.createElement(Element, __spreadProps(__spreadValues({}, props), {
    ref,
    className: cx(classes.input, {
      [classes.withIcon]: icon,
      [classes.invalid]: invalid,
      [classes.disabled]: disabled
    }),
    required,
    disabled,
    style: {
      paddingRight: rightSection ? rightSectionWidth : theme.spacing.small
    }
  })), rightSection && /* @__PURE__ */ React.createElement("div", __spreadProps(__spreadValues({}, rightSectionProps), {
    style: __spreadProps(__spreadValues({}, rightSectionProps.style), {
      paddingRight: 32
    }),
    className: cx(classes.rightSection, rightSectionProps.className)
  }), /* @__PURE__ */ React.createElement(Typography, {
    level: "b2",
    family: "Pretendard",
    color: theme.colors.green2
  }, rightSection))), description && descriptionType === "description" ? /* @__PURE__ */ React.createElement(Typography, {
    level: "b3",
    family: "Pretendard",
    color: invalid ? theme.colors.red2 : theme.colors.navy3,
    style: { marginTop: 4 }
  }, description) : invalid && /* @__PURE__ */ React.createElement(Typography, {
    level: "b3",
    family: "Pretendard",
    color: descriptionType === "error" ? theme.colors.red2 : descriptionType === "success" ? theme.colors.green3 : theme.colors.navy3,
    style: { marginTop: 4 }
  }, description));
});
Input.displayName = "@travelmakers-design/core/Input";

export { Input };
//# sourceMappingURL=Input.js.map
