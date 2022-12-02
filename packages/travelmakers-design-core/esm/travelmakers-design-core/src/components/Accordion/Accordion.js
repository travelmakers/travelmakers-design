import React, { forwardRef, useState } from 'react';
import { AccordionCheck } from './AccordionCheck.js';
import { AccordionIcon } from './AccordionIcon.js';
import useStyles from './Accordion.style.js';

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
const Accordion = forwardRef(({
  component,
  type = "Default",
  data,
  className,
  containerStyle,
  iconStyle,
  overrideStyles,
  __staticSelector = "div"
}, ref) => {
  const [open, setOpen] = useState(Array.from({ length: data.length }, (_, index) => false));
  const Element = component || "div";
  const { classes, cx } = useStyles({ open }, { overrideStyles, name: "div" });
  return /* @__PURE__ */ React.createElement("div", {
    className: cx(containerStyle)
  }, data == null ? void 0 : data.map((AccordionData, index) => /* @__PURE__ */ React.createElement(Element, {
    ref,
    key: `accordion-${index}`,
    className: cx(classes.container, className)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.row),
    onClick: () => setOpen((prevState) => {
      return prevState == null ? void 0 : prevState.map((data2, innerIndex) => index === innerIndex ? !data2 : data2);
    })
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.titleWrap)
  }, type === "Number" && /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.titleIndex)
  }, index + 1, "."), type === "Checkbox" && /* @__PURE__ */ React.createElement("div", {
    style: { marginRight: 8 }
  }, /* @__PURE__ */ React.createElement(AccordionCheck, null)), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.title)
  }, AccordionData.question)), /* @__PURE__ */ React.createElement(AccordionIcon, {
    className: cx(classes.icon),
    style: __spreadValues({
      transform: `rotate(${open[index] ? 180 : 0}deg)`
    }, iconStyle)
  })), open[index] && /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.content)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.divider)
  }), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.answerText)
  }, /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.answer),
    dangerouslySetInnerHTML: {
      __html: AccordionData == null ? void 0 : AccordionData.answer
    }
  }))))));
});
Accordion.displayName = "@travelmakers-design/core/Accordion";

export { Accordion };
//# sourceMappingURL=Accordion.js.map
