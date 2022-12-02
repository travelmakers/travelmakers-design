import { TmTheme } from "@travelmakers-design/styles";
import { TimerSize, TimerColor } from "./Timer";
interface TimerStyles {
    /** Timer 컴포넌트의 크기를 정합니다. */
    size?: TimerSize;
    /** Timer 컴포넌트의 색상을 정합니다. */
    color?: TimerColor;
}
declare const _default: (params: TimerStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"label" | "timer" | "container" | "icon" | "labelContainer">) => {
    classes: Record<"label" | "timer" | "container" | "icon" | "labelContainer", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Timer.style.d.ts.map