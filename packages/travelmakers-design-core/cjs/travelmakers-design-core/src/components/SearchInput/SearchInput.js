'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var CloseIcon = require('../IconButton/CloseIcon.js');
var SearchIcon = require('./SearchIcon.js');
var SearchInput_style = require('./SearchInput.style.js');
var View = require('../View/View.js');
var Typography = require('../Typography/Typography.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const SearchInput = React.forwardRef((_a, ref) => {
  var _b = _a, {
    component,
    width,
    label,
    line = true,
    description,
    descriptionType = "description",
    icon = /* @__PURE__ */ React__default.createElement(SearchIcon.SearchIcon, null),
    rightSectionWidth = 48,
    rightSection = /* @__PURE__ */ React__default.createElement(CloseIcon.CloseIcon, null),
    rightSectionProps = {},
    wrapperProps,
    invalid = false,
    required = false,
    disabled = false,
    multiline = false,
    roundness = true,
    className,
    style,
    co,
    overrideStyles,
    value,
    onChange
  } = _b, props = __objRest(_b, [
    "component",
    "width",
    "label",
    "line",
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
    "value",
    "onChange"
  ]);
  const theme = styles.useTmTheme();
  const [input, setInput] = React.useState(value);
  const { classes, cx } = SearchInput_style["default"]({
    roundness,
    multiline,
    invalid,
    width,
    descriptionType
  }, { overrideStyles, name: "Input" });
  const Element = component || "input";
  const _onRightSectionClick = (e) => {
    !disabled && _onChange({ target: { value: "" } });
  };
  const _onChange = (e) => {
    var _a2;
    setInput((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value);
    onChange && onChange(e);
  };
  return /* @__PURE__ */ React__default.createElement(View.View, {
    style: { width: width ? `${width}px` : "100%" }
  }, label && /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    level: "b2",
    family: "Pretendard",
    color: theme.colors.gray1,
    style: { marginBottom: 4 }
  }, label), /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    className: cx(classes.wrapper, className),
    co,
    style
  }, wrapperProps), icon && /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.icon, { [classes.disabled]: disabled })
  }, icon), /* @__PURE__ */ React__default.createElement(Element, __spreadProps(__spreadValues({}, props), {
    ref,
    value: input,
    onChange: _onChange,
    className: cx(classes.input, {
      [classes.fill]: !line,
      [classes.withIcon]: icon,
      [classes.invalid]: invalid,
      [classes.disabled]: disabled
    }),
    required,
    disabled,
    style: {
      paddingRight: rightSection ? rightSectionWidth : theme.spacing.small
    }
  })), rightSection && /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, rightSectionProps), {
    style: __spreadProps(__spreadValues({}, rightSectionProps.style), {
      paddingRight: 32
    }),
    className: cx(classes.rightSection, rightSectionProps.className),
    onClick: _onRightSectionClick
  }), rightSection)), description && descriptionType === "description" ? /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    level: "b3",
    family: "Pretendard",
    color: invalid ? theme.colors.red2 : theme.colors.navy3,
    style: { marginTop: 4 }
  }, description) : invalid && /* @__PURE__ */ React__default.createElement(Typography.Typography, {
    level: "b3",
    family: "Pretendard",
    color: descriptionType === "error" ? theme.colors.red2 : descriptionType === "success" ? theme.colors.green3 : theme.colors.navy3,
    style: { marginTop: 4 }
  }, description));
});
SearchInput.displayName = "@travelmakers-design/core/SearchInput";

exports.SearchInput = SearchInput;
//# sourceMappingURL=SearchInput.js.map
