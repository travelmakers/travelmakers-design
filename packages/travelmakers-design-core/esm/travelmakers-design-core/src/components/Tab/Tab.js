import { useTmTheme } from '@travelmakers-design/styles';
import React, { forwardRef, useState } from 'react';
import usePrimaryStyles from './TabPrimary.style.js';
import useSecondaryStyles from './TabSecondary.style.js';
import { View } from '../View/View.js';

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
const Tab = forwardRef((_a, ref) => {
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
  useTmTheme();
  const { classes, cx } = type === "primary" ? usePrimaryStyles({ size }, { overrideStyles, name: "Tab" }) : useSecondaryStyles({ size }, { overrideStyles, name: "Tab" });
  const [currentTab, setCurrentTab] = useState("");
  const onTabItemClick = (item) => {
    CURRENT_TAB = item;
    setCurrentTab(item);
  };
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
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
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
      className: isCurrentTab ? cx(classes.selectedTab) : cx(classes.tab),
      onClick: () => onTabItemClick(item)
    }, item, type === "secondary" && isCurrentTab && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.selectedTabBottom)
    })), type === "primary" && index !== array.length - 1 && /* @__PURE__ */ React.createElement("span", {
      className: cx(classes.divider)
    }));
  }));
});
Tab.displayName = "@travelmakers-design/core/Tab";

export { Tab };
//# sourceMappingURL=Tab.js.map
