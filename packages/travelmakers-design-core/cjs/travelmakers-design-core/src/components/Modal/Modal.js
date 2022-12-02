'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var Modal_style = require('./Modal.style.js');
var IcBackArrow = require('./assets/IcBackArrow.js');
var IcClose = require('./assets/IcClose.js');
var useHiddenBodyOverflow = require('../../../../travelmakers-design-hooks/esm/useHiddenBodyOverflow/useHiddenBodyOverflow.js');
var Button = require('../Button/Button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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
const Modal = React.forwardRef((_a, ref) => {
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
  const { classes, cx } = Modal_style["default"]({}, { overrideStyles, name: "span" });
  const el = document.createElement("div");
  document.body.appendChild(el);
  useHiddenBodyOverflow["default"](open);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, open ? ReactDOM__default.createPortal(/* @__PURE__ */ React__default.createElement(Element, __spreadValues({
    ref,
    className: cx(classes.container, className)
  }, props), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.absoluteContainer, (modalPopup ? "modalPopup" : "") + (centerPopup ? " popup" : "")),
    style: containerStyle
  }, /* @__PURE__ */ React__default.createElement("div", {
    onClick: onClose,
    className: cx(classes.closeContainer, (modalPopup ? "modalPopup" : "") + (centerPopup ? " popup" : ""))
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.modalContainer, ModalContainerClassName ? ModalContainerClassName : "" + (modalPopup ? " modalPopup" : "") + (centerPopup ? " popup" : "")),
    style: wrapperStyle
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.modalContentsContainer)
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.modalContents, "modalPopup Agreement")
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.modalHeader, "modalPopup Agreement")
  }, /* @__PURE__ */ React__default.createElement(IcBackArrow.IcBackArrow, {
    onClick: onClose,
    className: cx(classes.modalBackIcon, "modalPopup Agreement")
  }), /* @__PURE__ */ React__default.createElement("span", {
    className: cx(classes.modalTitle, "modalPopup Agreement")
  }, title), /* @__PURE__ */ React__default.createElement(IcClose.IcClose, {
    onClick: onClose,
    className: cx(classes.modalCloseIcon, "modalPopup Agreement")
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.modalContentText)
  }, /* @__PURE__ */ React__default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  }))), /* @__PURE__ */ React__default.createElement("div", {
    className: cx(classes.modalAbsolute)
  }, /* @__PURE__ */ React__default.createElement(Button.Button, {
    fullWidth: true,
    onClick: handleAgree
  }, agreeText))))))), document.body) : null);
});
Modal.displayName = "@travelmakers-design/core/Modal";

exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map
