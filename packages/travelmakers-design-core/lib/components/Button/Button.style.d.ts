import { TmPalette, TmSize, TmTheme } from "@travelmakers-design/styles";
interface ButtonStylesProps {
    variant?: TmPalette;
    size: TmSize;
    fullWidth: boolean;
    roundness?: boolean;
    line?: boolean;
}
export declare const heights: Record<TmSize, number>;
declare const _default: (params: ButtonStylesProps, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"loading" | "solid" | "root" | "icon" | "leftIcon" | "rightIcon" | "inner" | "label" | "ghost" | "spinnerWrapper">) => {
    classes: Record<"loading" | "solid" | "root" | "icon" | "leftIcon" | "rightIcon" | "inner" | "label" | "ghost" | "spinnerWrapper", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Button.style.d.ts.map