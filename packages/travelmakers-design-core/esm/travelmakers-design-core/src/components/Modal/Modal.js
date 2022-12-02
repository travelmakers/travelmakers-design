import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import useStyles from './Modal.style.js';
import { IcBackArrow } from './assets/IcBackArrow.js';
import { IcClose } from './assets/IcClose.js';
import useHiddenBodyOverflow from '../../../../travelmakers-design-hooks/esm/useHiddenBodyOverflow/useHiddenBodyOverflow.js';
import { Button } from '../Button/Button.js';

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
const Modal = forwardRef((_a, ref) => {
  var _b = _a, {
    component,
    open,
    ModalContainerClassName,
    onClose,
    containerStyle = {},
    wrapperStyle = {},
    modalPopup = false,
    centerPopup = false,
    children,
    className,
    overrideStyles,
    title = "",
    handleAgree,
    agreeText = "\uB3D9\uC758\uD558\uAE30",
    backIcon = true,
    __staticSelector = "span"
  } = _b, props = __objRest(_b, [
    "component",
    "open",
    "ModalContainerClassName",
    "onClose",
    "containerStyle",
    "wrapperStyle",
    "modalPopup",
    "centerPopup",
    "children",
    "className",
    "overrideStyles",
    "title",
    "handleAgree",
    "agreeText",
    "backIcon",
    "__staticSelector"
  ]);
  const Element = component || "span";
  const { classes, cx } = useStyles({}, { overrideStyles, name: "span" });
  const el = document.createElement("div");
  document.body.appendChild(el);
  useHiddenBodyOverflow(open);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, open ? ReactDOM.createPortal(/* @__PURE__ */ React.createElement(Element, __spreadValues({
    ref,
    className: cx(classes.container, className)
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.absoluteContainer, (modalPopup ? "modalPopup" : "") + (centerPopup ? " popup" : "")),
    style: containerStyle
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: onClose,
    className: cx(classes.closeContainer, (modalPopup ? "modalPopup" : "") + (centerPopup ? " popup" : ""))
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.modalContainer, ModalContainerClassName ? ModalContainerClassName : "" + (modalPopup ? " modalPopup" : "") + (centerPopup ? " popup" : "")),
    style: wrapperStyle
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.modalContentsContainer)
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.modalContents, "modalPopup Agreement")
  }, /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.modalHeader, "modalPopup Agreement")
  }, /* @__PURE__ */ React.createElement(IcBackArrow, {
    onClick: onClose,
    className: cx(classes.modalBackIcon, "modalPopup Agreement")
  }), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.modalTitle, "modalPopup Agreement")
  }, title), /* @__PURE__ */ React.createElement(IcClose, {
    onClick: onClose,
    className: cx(classes.modalCloseIcon, "modalPopup Agreement")
  })), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.modalContentText)
  }, /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.modalAbsolute)
  }, /* @__PURE__ */ React.createElement(Button, {
    fullWidth: true,
    onClick: handleAgree
  }, agreeText))))))), document.body) : null);
});
Modal.displayName = "@travelmakers-design/core/Modal";

export { Modal };
//# sourceMappingURL=Modal.js.map
