import { TmTheme } from "@travelmakers-design/styles";
import { TagColor, TagSize } from "./Tag";
interface TagStyles {
    color?: TagColor;
    fill?: boolean;
    roundness?: boolean;
    size?: TagSize;
    disabled?: boolean;
}
declare const _default: (params: TagStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"inner" | "line" | "container">) => {
    classes: Record<"inner" | "line" | "container", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Tag.style.d.ts.map