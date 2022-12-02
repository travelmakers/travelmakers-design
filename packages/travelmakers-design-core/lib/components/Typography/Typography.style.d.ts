import { TmColor, TmFontFamily, TmFontSize, TmPalette, TmSize, TmTheme } from "@travelmakers-design/styles";
import { TypographyTextAlign } from "./Typography";
interface TypographyStylesProps {
    family: TmFontFamily;
    level: TmFontSize;
    mobile?: TmFontSize;
    tablet?: TmFontSize;
    textAlign?: TypographyTextAlign;
    disabled?: boolean;
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    color?: TmPalette | TmColor | string;
}
export declare const heights: Record<TmSize, number>;
declare const _default: (params: TypographyStylesProps, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"label" | "loading" | "solid" | "root" | "inner">) => {
    classes: Record<"label" | "loading" | "solid" | "root" | "inner", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Typography.style.d.ts.map