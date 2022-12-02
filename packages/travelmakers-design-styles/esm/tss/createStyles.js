import { useTmTheme, useTmThemeStyles } from '../theme/TmProvider.js';
import { fromEntries } from './utils/fromEntries.js';
import { mergeClassNames } from './utils/mergeClassNames.js';
import { useCss } from './useCss.js';

function createStyles(getCssObjectOrCssObject) {
  const getCssObject = typeof getCssObjectOrCssObject === "function" ? getCssObjectOrCssObject : () => getCssObjectOrCssObject;
  function useStyles(params, options) {
    const theme = useTmTheme();
    const themeStyles = useTmThemeStyles()[options == null ? void 0 : options.name];
    const { css, cx } = useCss();
    let count = 0;
    function createRef(refName) {
      count += 1;
      return `tm-ref_${refName || ""}_${count}`;
    }
    const cssObject = getCssObject(theme, params, createRef);
    const _overrideStyles = typeof (options == null ? void 0 : options.overrideStyles) === "function" ? options == null ? void 0 : options.overrideStyles(theme) : (options == null ? void 0 : options.overrideStyles) || {};
    const _themeStyles = typeof themeStyles === "function" ? themeStyles(theme) : themeStyles || {};
    const _co = typeof (options == null ? void 0 : options.co) === "function" ? options.co(theme) : options == null ? void 0 : options.co;
    const classes = fromEntries(Object.keys(cssObject).map((key) => {
      const mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_overrideStyles[key]), css(_co));
      return [key, mergedStyles];
    }));
    return { classes: mergeClassNames(cx, classes, options == null ? void 0 : options.name), cx, theme };
  }
  return useStyles;
}

export { createStyles };
//# sourceMappingURL=createStyles.js.map
