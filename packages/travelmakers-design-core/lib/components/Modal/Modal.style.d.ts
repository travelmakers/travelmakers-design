import { TmTheme } from "@travelmakers-design/styles";
import { ModalSize, ModalType } from "./Modal";
interface AccordionStyles {
    size?: ModalSize;
    type?: ModalType;
}
declare const _default: (params: AccordionStyles, options?: import("@travelmakers-design/styles/lib/tss/createStyles").UseStylesOptions<"container" | "absoluteContainer" | "closeContainer" | "modalContainer" | "modalContentsContainer" | "modalContents" | "modalHeader" | "modalTitle" | "modalBackIcon" | "modalCloseIcon" | "modalContentText" | "modalAbsolute">) => {
    classes: Record<"container" | "absoluteContainer" | "closeContainer" | "modalContainer" | "modalContentsContainer" | "modalContents" | "modalHeader" | "modalTitle" | "modalBackIcon" | "modalCloseIcon" | "modalContentText" | "modalAbsolute", string>;
    cx: (...args: any) => string;
    theme: TmTheme;
};
export default _default;
//# sourceMappingURL=Modal.style.d.ts.map