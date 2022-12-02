import { ClassNames, PolymorphicComponentProps, TmComponentProps } from "@travelmakers-design/styles";
import React from "react";
import useStyles from "./Modal.style";
export declare type ModalStylesNames = ClassNames<typeof useStyles>;
export declare type ModalSize = "small" | "medium" | "large";
export declare type ModalType = "text" | "number";
export interface ModalBaseProps extends TmComponentProps<ModalStylesNames> {
    /** Modal open 여부를 결정한다. */
    open: boolean;
    /** 토스트 형식 */
    modalPopup?: boolean;
    /** 팝업 공지용 */
    centerPopup?: boolean;
    /** Container의 ClassName 지정 */
    ModalContainerClassName?: string;
    /** Close 함수 지정 */
    onClose: () => void;
    /** Container의 Style 지정 */
    containerStyle?: React.CSSProperties;
    /** Wrapper의 Style 지정 */
    wrapperStyle?: React.CSSProperties;
    /** Modal 컴포넌트의 제목 지정 */
    title?: string;
    /** Modal 컴포넌트에서 버튼을 눌렀을 때 함수를 지정한다.*/
    handleAgree?: () => void;
    /** Modal 컴포넌트에서 버튼의 이름을 지정한다.*/
    agreeText?: string;
    /** Modal 컴포넌트에서 뒤로가기 아이콘 표시 여부를 결정한다.*/
    backIcon?: boolean;
}
export interface _ModalProps extends ModalBaseProps, TmComponentProps<ModalStylesNames> {
    /** Static css selector base */
    __staticSelector?: string;
}
export declare type ModalProps<C extends React.ElementType> = PolymorphicComponentProps<C, _ModalProps>;
declare type TagComponent = <C extends React.ElementType = "span">(props: ModalProps<C>) => React.ReactElement;
export declare const Modal: TagComponent & {
    displayName?: string;
};
export {};
//# sourceMappingURL=Modal.d.ts.map