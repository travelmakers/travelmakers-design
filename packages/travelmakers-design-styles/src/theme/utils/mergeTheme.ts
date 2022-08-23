import { TmTheme, TmThemeOverride } from "../types";

export function mergeTheme(
  currentTheme: TmTheme,
  themeOverride?: TmThemeOverride
): TmTheme {
  if (!themeOverride) {
    return currentTheme;
  }

  return Object.keys(currentTheme).reduce((acc, key) => {
    if (key === "headings" && themeOverride.headings) {
      const sizes = themeOverride.headings
        ? Object.keys(currentTheme.headings).reduce((headingsAcc, h) => {
            // eslint-disable-next-line no-param-reassign
            headingsAcc[h] = {
              ...currentTheme.headings[h],
              ...themeOverride.headings[h],
            };
            return headingsAcc;
          }, {} as TmTheme["headings"])
        : currentTheme.headings;
      return {
        ...acc,
        headings: {
          ...currentTheme.headings,
          ...themeOverride.headings,
          ...sizes,
        },
      };
    }

    acc[key] =
      typeof themeOverride[key] === "object"
        ? { ...currentTheme[key], ...themeOverride[key] }
        : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as TmTheme);
}
