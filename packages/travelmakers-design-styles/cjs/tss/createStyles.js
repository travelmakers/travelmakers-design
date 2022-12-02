'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TmProvider = require('../theme/TmProvider.js');
var fromEntries = require('./utils/fromEntries.js');
var mergeClassNames = require('./utils/mergeClassNames.js');
var useCss = require('./useCss.js');

function createStyles(getCssObjectOrCssObject) {
  const getCssObject = typeof getCssObjectOrCssObject === "function" ? getCssObjectOrCssObject : () => getCssObjectOrCssObject;
  function useStyles(params, options) {
    const theme = TmProvider.useTmTheme();
    const themeStyles = TmProvider.useTmThemeStyles()[options == null ? void 0 : options.name];
    const { css, cx } = useCss.useCss();
    let count = 0;
    function createRef(refName) {
      count += 1;
      return `tm-ref_${refName || ""}_${count}`;
    }
    const cssObject = getCssObject(theme, params, createRef);
    const _overrideStyles = typeof (options == null ? void 0 : options.overrideStyles) === "function" ? options == null ? void 0 : options.overrideStyles(theme) : (options == null ? void 0 : options.overrideStyles) || {};
    const _themeStyles = typeof themeStyles === "function" ? themeStyles(theme) : themeStyles || {};
    const _co = typeof (options == null ? void 0 : options.co) === "function" ? options.co(theme) : options == null ? void 0 : options.co;
    const classes = fromEntries.fromEntries(Object.keys(cssObject).map((key) => {
      const mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_overrideStyles[key]), css(_co));
      return [key, mergedStyles];
    }));
    return { classes: mergeClassNames.mergeClassNames(cx, classes, options == null ? void 0 : options.name), cx, theme };
  }
  return useStyles;
}

exports.createStyles = createStyles;
//# sourceMappingURL=createStyles.js.map
