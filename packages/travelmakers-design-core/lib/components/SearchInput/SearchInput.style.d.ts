import { InputDescriptionType } from "../Input/Input";
interface InputStyles {
    roundness: boolean;
    multiline: boolean;
    invalid: boolean;
    width?: number;
    descriptionType?: InputDescriptionType;
}
declare const _default: (params: InputStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"input" | "fill" | "icon" | "disabled" | "invalid" | "wrapper" | "withIcon" | "rightSection">) => {
    classes: Record<"input" | "fill" | "icon" | "disabled" | "invalid" | "wrapper" | "withIcon" | "rightSection", string>;
    cx: (...args: any) => string;
    theme: import("@travelmakers-design/styles").TmTheme;
};
export default _default;
//# sourceMappingURL=SearchInput.style.d.ts.map