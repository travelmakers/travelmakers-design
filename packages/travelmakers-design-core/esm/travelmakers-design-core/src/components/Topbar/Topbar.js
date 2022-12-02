import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef } from 'react';
import useStyles from './Topbar.style.js';
import { View } from '../View/View.js';
import { Image } from '../Image/Image.js';
import { Badge } from '../Badge/Badge.js';

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
const Topbar = forwardRef((_a, ref) => {
  var _b = _a, {
    mobileType = "Expanded",
    isLogin = false,
    isBadge = false,
    logoClick,
    searchClick,
    onClick,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "mobileType",
    "isLogin",
    "isBadge",
    "logoClick",
    "searchClick",
    "onClick",
    "className",
    "co",
    "overrideStyles"
  ]);
  useTmTheme();
  const { classes, cx } = useStyles({ mobileType }, { overrideStyles, name: "Price" });
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.container)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.wrapper)
  }, /* @__PURE__ */ React.createElement(Image, {
    src: require("./svg/logo.svg"),
    className: cx(classes.logo),
    onClick: logoClick
  }), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.section)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.searchBox),
    onClick: searchClick
  }, /* @__PURE__ */ React.createElement(Image, {
    src: require("./svg/search.svg"),
    className: cx(classes.searchIcon)
  }), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.searchText)
  }, "\uD638\uD154 \uAC80\uC0C9")), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.menuText),
    onClick
  }, isLogin ? "\uB9C8\uC774\uD398\uC774\uC9C0" : "\uB85C\uADF8\uC778", isLogin && isBadge && /* @__PURE__ */ React.createElement(Badge, {
    className: cx(classes.newBadge)
  }, "N")), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.mobileSearchBox),
    onClick
  }, /* @__PURE__ */ React.createElement(Image, {
    src: require("./svg/ic-mobile-mypage.svg"),
    className: cx(classes.mypageIcon)
  }), isLogin && isBadge && /* @__PURE__ */ React.createElement(Badge, {
    className: cx(classes.newBadge)
  }))))));
});
Topbar.displayName = "@travelmakers-design/core/Topbar";

export { Topbar };
//# sourceMappingURL=Topbar.js.map
