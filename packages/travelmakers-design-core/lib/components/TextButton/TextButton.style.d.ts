/// <reference types="react" />
import { TmFontFamily, TmPalette, TmSize, TmTheme } from "@travelmakers-design/styles";
interface ButtonStylesProps {
    color?: TmPalette;
    size: TmSize;
    fullWidth: boolean;
    family?: TmFontFamily;
    underline?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const _default: (params: ButtonStylesProps, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"label" | "icon" | "loading" | "solid" | "root" | "leftIcon" | "rightIcon" | "inner">) => {
    classes: Record<"label" | "icon" | "loading" | "solid" | "root" | "leftIcon" | "rightIcon" | "inner", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=TextButton.style.d.ts.map