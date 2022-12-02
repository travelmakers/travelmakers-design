'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var Topbar_style = require('./Topbar.style.js');
var View = require('../View/View.js');
var Image = require('../Image/Image.js');
var Badge = require('../Badge/Badge.js');

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
const Topbar = React.forwardRef((_a, ref) => {
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
  styles.useTmTheme();
  const { classes, cx } = Topbar_style["default"]({ mobileType }, { overrideStyles, name: "Price" });
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.container)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.wrapper)
  }, /* @__PURE__ */ React__default.createElement(Image.Image, {
    src: require("./svg/logo.svg"),
    className: cx(classes.logo),
    onClick: logoClick
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.section)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.searchBox),
    onClick: searchClick
  }, /* @__PURE__ */ React__default.createElement(Image.Image, {
    src: require("./svg/search.svg"),
    className: cx(classes.searchIcon)
  }), /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.searchText)
  }, "\uD638\uD154 \uAC80\uC0C9")), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.menuText),
    onClick
  }, isLogin ? "\uB9C8\uC774\uD398\uC774\uC9C0" : "\uB85C\uADF8\uC778", isLogin && isBadge && /* @__PURE__ */ React__default.createElement(Badge.Badge, {
    className: cx(classes.newBadge)
  }, "N")), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.mobileSearchBox),
    onClick
  }, /* @__PURE__ */ React__default.createElement(Image.Image, {
    src: require("./svg/ic-mobile-mypage.svg"),
    className: cx(classes.mypageIcon)
  }), isLogin && isBadge && /* @__PURE__ */ React__default.createElement(Badge.Badge, {
    className: cx(classes.newBadge)
  }))))));
});
Topbar.displayName = "@travelmakers-design/core/Topbar";

exports.Topbar = Topbar;
//# sourceMappingURL=Topbar.js.map
