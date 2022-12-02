import React, { forwardRef, useState, useEffect } from 'react';
import useStyles from './Timer.style.js';
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
const INTERVAL_TIME = 1e3;
const TIMER_FORMAT = "D\uC77C HH : mm : ss";
const Timer = forwardRef((_a, ref) => {
  var _b = _a, {
    size = "small",
    color = "navy",
    label = "\uD0C0\uC784\uC138\uC77C \uC6CC\uB529",
    endAt = new Date(),
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "size",
    "color",
    "label",
    "endAt",
    "className",
    "co",
    "overrideStyles"
  ]);
  const { classes, cx } = useStyles({ size, color }, { overrideStyles, name: "span" });
  const [timeLeft, setTimeLeft] = useState(null);
  const getTimeFormat = () => {
    if (!endAt || !timeLeft)
      return "";
    return TIMER_FORMAT.replace("D", timeLeft.days).replace("HH", timeLeft.hours).replace("mm", timeLeft.minutes).replace("ss", timeLeft.seconds);
  };
  const calculateTimeLeft = () => {
    const difference = new Date(endAt).getTime() - new Date().getTime();
    let timeLeft2 = {};
    if (difference > 0) {
      timeLeft2 = {
        days: Math.floor(difference / (1e3 * 60 * 60 * 24)).toString(),
        hours: Math.floor(difference / (1e3 * 60 * 60) % 24).toString().padStart(2, "0"),
        minutes: Math.floor(difference / 1e3 / 60 % 60).toString().padStart(2, "0"),
        seconds: Math.floor(difference / 1e3 % 60).toString().padStart(2, "0")
      };
    }
    setTimeLeft(timeLeft2);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [timeLeft]);
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    ref,
    className: cx(classes.container, className),
    co
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.labelContainer)
  }, /* @__PURE__ */ React.createElement(Image, {
    src: color === "navy" ? require("../../assets/svg/ic-timesale-navy.svg") : require("../../assets/svg/ic-timesale-white.svg"),
    className: cx(classes.icon),
    alt: "timer"
  }), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.label)
  }, label)), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.timer)
  }, getTimeFormat()));
});
Timer.displayName = "@travelmakers-design/core/Timer";

export { Timer };
//# sourceMappingURL=Timer.js.map
