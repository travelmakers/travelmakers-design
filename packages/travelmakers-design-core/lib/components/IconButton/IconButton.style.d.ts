import { TmPalette, TmSize } from "@travelmakers-design/styles";
interface IconButtonStylesProps {
    variant?: TmPalette;
    size: TmSize;
    line?: boolean;
    roundness?: boolean;
}
declare const _default: (params: IconButtonStylesProps, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"loading" | "solid" | "ghost" | "root" | "inner" | "spinnerWrapper">) => {
    classes: Record<"loading" | "solid" | "ghost" | "root" | "inner" | "spinnerWrapper", string>;
    cx: (...args: any) => string;
    theme: import("@travelmakers-design/styles").TmTheme;
};
export default _default;
//# sourceMappingURL=IconButton.style.d.ts.map