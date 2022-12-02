import React, { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react';
import useStyles from './Image.style.js';
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
let observer = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";
const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};
const Image = forwardRef((_a, ref) => {
  var _b = _a, {
    lazy,
    threshold = 0.5,
    placeholder,
    src,
    radius,
    width = "100%",
    height = "auto",
    alt,
    fit,
    style,
    className,
    co,
    overrideStyles
  } = _b, props = __objRest(_b, [
    "lazy",
    "threshold",
    "placeholder",
    "src",
    "radius",
    "width",
    "height",
    "alt",
    "fit",
    "style",
    "className",
    "co",
    "overrideStyles"
  ]);
  const { classes, cx } = useStyles({ radius }, { overrideStyles, name: "Image" });
  const [loaded, setLoaded] = useState(false);
  const [intersected, setIntersected] = useState(false);
  const imgRef = useRef(null);
  const imageStyle = {
    width,
    height,
    objectFit: fit
  };
  useImperativeHandle(ref, () => imgRef.current);
  useEffect(() => {
    if (!lazy) {
      setIntersected(true);
      return;
    }
    const handleIntersect = () => setIntersected(true);
    const imgElement = imgRef.current;
    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleIntersect);
    return () => {
      imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleIntersect);
    };
  }, [lazy]);
  useEffect(() => {
    if (!lazy)
      return;
    observer = new IntersectionObserver(onIntersection, { threshold });
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);
  return /* @__PURE__ */ React.createElement(View, __spreadValues({
    className: cx(classes.root, className),
    co
  }, props), /* @__PURE__ */ React.createElement("img", {
    ref: imgRef,
    src,
    alt,
    className: cx(classes.image),
    style: imageStyle,
    onLoad: () => setLoaded(true)
  }), (!loaded || lazy && !intersected) && placeholder && /* @__PURE__ */ React.createElement("div", {
    className: classes.placeholder,
    title: alt
  }, placeholder), props.children);
});
Image.displayName = "@travelmakers-design/core/Image";

export { Image };
//# sourceMappingURL=Image.js.map
