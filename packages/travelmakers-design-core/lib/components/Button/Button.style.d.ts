import { TmPalette, TmSize, TmTheme } from "@travelmakers-design/styles";
interface ButtonStylesProps {
    variant?: TmPalette;
    size: TmSize;
    fullWidth: boolean;
    roundness?: boolean;
    line?: boolean;
}
export declare const heights: Record<TmSize, number>;
declare const _default: (params: ButtonStylesProps, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"label" | "icon" | "loading" | "solid" | "ghost" | "root" | "leftIcon" | "rightIcon" | "inner" | "spinnerWrapper">) => {
    classes: Record<"label" | "icon" | "loading" | "solid" | "ghost" | "root" | "leftIcon" | "rightIcon" | "inner" | "spinnerWrapper", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Button.style.d.ts.map