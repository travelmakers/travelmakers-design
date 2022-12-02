'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@travelmakers-design/styles');
var React = require('react');
var TabPrimary_style = require('./TabPrimary.style.js');
var TabSecondary_style = require('./TabSecondary.style.js');
var View = require('../View/View.js');

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
let CURRENT_TAB = "";
const Tab = React.forwardRef((_a, ref) => {
  var _b = _a, {
    type = "primary",
    size = "small",
    array = [],
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "type",
    "size",
    "array",
    "className",
    "co",
    "overrideStyles"
  ]);
  styles.useTmTheme();
  const { classes, cx } = type === "primary" ? TabPrimary_style["default"]({ size }, { overrideStyles, name: "Tab" }) : TabSecondary_style["default"]({ size }, { overrideStyles, name: "Tab" });
  const [currentTab, setCurrentTab] = React.useState("");
  const onTabItemClick = (item) => {
    CURRENT_TAB = item;
    setCurrentTab(item);
  };
  return /* @__PURE__ */ React__default.createElement(View.View, __spreadValues({
    ref,
    className: cx(classes.root, className),
    co
  }, props), array.map((item, index) => {
    let isCurrentTab = false;
    if (CURRENT_TAB !== "") {
      isCurrentTab = CURRENT_TAB === item;
    } else if (index === 0) {
      isCurrentTab = true;
      onTabItemClick(item);
    }
    return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement("span", {
      className: isCurrentTab ? cx(classes.selectedTab) : cx(classes.tab),
      onClick: () => onTabItemClick(item)
    }, item, type === "secondary" && isCurrentTab && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.selectedTabBottom)
    })), type === "primary" && index !== array.length - 1 && /* @__PURE__ */ React__default.createElement("span", {
      className: cx(classes.divider)
    }));
  }));
});
Tab.displayName = "@travelmakers-design/core/Tab";

exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map
