import React, { forwardRef, useState, useMemo, useEffect } from 'react';
import { IcChecked } from './assets/IcChecked.js';
import { IcCheckSelectedBeige } from './assets/IcCheckSelectedBeige.js';
import { IcDropDown } from './assets/IcDropDown.js';
import { IcDropDownWhite } from './assets/IcDropDownWhite.js';
import { IcUnCheck } from './assets/IcUnCheck.js';
import useStyles from './BottomSheet.style.js';
import { Modal } from '../Modal/Modal.js';

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
const BottomSheet = forwardRef((_a, ref) => {
  var _b = _a, {
    component,
    transparent = false,
    options = [],
    value,
    defaultSelect = null,
    setValue,
    containerStyle = {},
    popup = false,
    children,
    className,
    overrideStyles,
    __staticSelector = "div"
  } = _b, props = __objRest(_b, [
    "component",
    "transparent",
    "options",
    "value",
    "defaultSelect",
    "setValue",
    "containerStyle",
    "popup",
    "children",
    "className",
    "overrideStyles",
    "__staticSelector"
  ]);
  const Element = component || "div";
  const { classes, cx } = useStyles({}, { overrideStyles, name: "div" });
  const [selectedAgreement, setSelectedAgreement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAllChecked = useMemo(() => {
    if (value) {
      return Object.values(value).filter((v) => !!v).length === options.length;
    }
  }, [value, options.length]);
  useEffect(() => {
    setValue == null ? void 0 : setValue(options.reduce((result, item) => {
      if (defaultSelect !== null && defaultSelect.includes(item.key)) {
        result[item.key] = true;
      } else {
        result[item.key] = false;
      }
      return result;
    }, {}));
  }, []);
  const handleAllCheck = () => {
    const preValue = {};
    options.map((option) => {
      return preValue[option.key] = !isAllChecked;
    });
    setValue == null ? void 0 : setValue(preValue);
  };
  const handleModalOpen = (v) => {
    setSelectedAgreement(v);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleAgree = (v) => {
    setValue == null ? void 0 : setValue((prev) => __spreadProps(__spreadValues({}, prev), { [v.key]: true }));
    setIsModalOpen(false);
  };
  return /* @__PURE__ */ React.createElement(Element, __spreadValues({
    ref,
    className: cx(classes.container, transparent && `transparent-agreement`, className),
    style: containerStyle
  }, props), options.length > 1 && /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.option),
    onClick: () => handleAllCheck()
  }, isAllChecked ? transparent ? /* @__PURE__ */ React.createElement(IcCheckSelectedBeige, {
    className: cx(classes.optionIcon)
  }) : /* @__PURE__ */ React.createElement(IcChecked, {
    className: cx(classes.optionIcon)
  }) : /* @__PURE__ */ React.createElement(IcUnCheck, {
    className: cx(classes.optionIcon)
  }), /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.label)
  }, "\uC804\uCCB4 \uB3D9\uC758")), options.map((option, index) => /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.option),
    key: `option-${option.key}`
  }, (value == null ? void 0 : value[option.key]) ? transparent ? /* @__PURE__ */ React.createElement(IcCheckSelectedBeige, {
    className: cx(classes.optionIcon),
    onClick: () => setValue == null ? void 0 : setValue((prev) => __spreadProps(__spreadValues({}, prev), {
      [option.key]: !prev[option.key] === void 0 ? true : !prev[option.key]
    }))
  }) : /* @__PURE__ */ React.createElement(IcChecked, {
    className: cx(classes.optionIcon),
    onClick: () => setValue == null ? void 0 : setValue((prev) => __spreadProps(__spreadValues({}, prev), {
      [option.key]: !prev[option.key] === void 0 ? true : !prev[option.key]
    }))
  }) : /* @__PURE__ */ React.createElement(IcUnCheck, {
    className: cx(classes.optionIcon),
    onClick: () => setValue == null ? void 0 : setValue((prev) => __spreadProps(__spreadValues({}, prev), {
      [option.key]: !prev[option.key] === void 0 ? true : !prev[option.key]
    }))
  }), /* @__PURE__ */ React.createElement("div", {
    className: cx(classes.labelContainer),
    onClick: () => handleModalOpen(option)
  }, /* @__PURE__ */ React.createElement("span", {
    className: cx(classes.label)
  }, option.label), transparent ? /* @__PURE__ */ React.createElement(IcDropDownWhite, {
    className: cx(classes.moreIcon),
    style: {
      transform: "rotate(0)"
    }
  }) : /* @__PURE__ */ React.createElement(IcDropDown, {
    className: cx(classes.moreIcon),
    style: {
      transform: "rotate(-90deg)"
    }
  })))), selectedAgreement && isModalOpen && /* @__PURE__ */ React.createElement(Modal, {
    open: isModalOpen,
    onClose: handleModalClose,
    modalPopup: popup,
    ModalContainerClassName: "max-h",
    handleAgree: () => handleAgree(selectedAgreement),
    title: selectedAgreement == null ? void 0 : selectedAgreement.label,
    backIcon: true
  }, selectedAgreement == null ? void 0 : selectedAgreement.content));
});
BottomSheet.displayName = "@travelmakers-design/core/BottomSheet";

export { BottomSheet };
//# sourceMappingURL=BottomSheet.js.map
