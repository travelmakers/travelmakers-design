import React, { forwardRef } from 'react';
import useStyles from './Tag.style.js';

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
const Tag = forwardRef((_a, ref) => {
  var _b = _a, {
    component,
    size = "small",
    color = "green",
    roundness = false,
    fill = true,
    disabled = false,
    children,
    className,
    overrideStyles,
    __staticSelector = "span"
  } = _b, props = __objRest(_b, [
    "component",
    "size",
    "color",
    "roundness",
    "fill",
    "disabled",
    "children",
    "className",
    "overrideStyles",
    "__staticSelector"
  ]);
  const Element = component || "span";
  const { classes, cx } = useStyles({ color, roundness, fill, size, disabled }, { overrideStyles, name: "span" });
  return /* @__PURE__ */ React.createElement(Element, __spreadValues({
    ref,
    className: cx(classes.container, classes[color], !fill && classes["line"], className)
  }, props), children);
});
Tag.displayName = "@travelmakers-design/core/Tag";

export { Tag };
//# sourceMappingURL=Tag.js.map
