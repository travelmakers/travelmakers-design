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
function mergeTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    return currentTheme;
  }
  return Object.keys(currentTheme).reduce((acc, key) => {
    if (key === "headings" && themeOverride.headings) {
      const sizes = themeOverride.headings ? Object.keys(currentTheme.headings).reduce((headingsAcc, h) => {
        headingsAcc[h] = __spreadValues(__spreadValues({}, currentTheme.headings[h]), themeOverride.headings[h]);
        return headingsAcc;
      }, {}) : currentTheme.headings;
      return __spreadProps(__spreadValues({}, acc), {
        headings: __spreadValues(__spreadValues(__spreadValues({}, currentTheme.headings), themeOverride.headings), sizes)
      });
    }
    acc[key] = typeof themeOverride[key] === "object" ? __spreadValues(__spreadValues({}, currentTheme[key]), themeOverride[key]) : themeOverride[key] || currentTheme[key];
    return acc;
  }, {});
}

export { mergeTheme };
//# sourceMappingURL=mergeTheme.js.map
