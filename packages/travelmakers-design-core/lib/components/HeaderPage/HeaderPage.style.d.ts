import { TmTheme } from "@travelmakers-design/styles";
interface HeaderPageStyles {
    /** HeaderSection 컴포넌트의 크기를 정합니다. */
    size?: "small" | "large";
    /** HeaderSection 컴포넌트의 색상을 정합니다. */
    color?: "navy" | "white";
}
declare const _default: (params: HeaderPageStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"title" | "divider" | "root" | "titleWrapper">) => {
    classes: Record<"title" | "divider" | "root" | "titleWrapper", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=HeaderPage.style.d.ts.map