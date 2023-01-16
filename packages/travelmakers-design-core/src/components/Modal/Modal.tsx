import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { Button } from "../Button";
import { IcBackArrow } from "./assets/IcBackArrow";
import { IcClose } from "./assets/IcClose";
import ReactDOM from "react-dom";
import { useHiddenBodyOverflow } from "@travelmakers-design/hooks";
import useStyles from "./Modal.style";

export type ModalStylesNames = ClassNames<typeof useStyles>;

export type ModalSize = "small" | "medium" | "large";

export type ModalType = "text" | "number";

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

  /** Modal 컴포넌트에서 버튼 유무를 결정한다.*/
  isAgree?: boolean;

  /** Modal 컴포넌트에서 뒤로가기 아이콘 표시 여부를 결정한다.*/
  backIcon?: boolean;
}

export interface _ModalProps
  extends ModalBaseProps,
    TmComponentProps<ModalStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type ModalProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _ModalProps
>;

type TagComponent = <C extends React.ElementType = "span">(
  props: ModalProps<C>
) => React.ReactElement;

export const Modal: TagComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "span">(
    {
      component,
      open,
      ModalContainerClassName,
      onClose,
      containerStyle = {},
      wrapperStyle = {},
      modalPopup = false,
      centerPopup = false,
      children,
      className,
      overrideStyles,
      title = "",
      handleAgree,
      agreeText = "동의하기",
      isAgree = false,
      backIcon = true,
      __staticSelector = "span",
      ...props
    }: ModalProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element: any = component || "span";
    const { classes, cx } = useStyles({}, { overrideStyles, name: "span" });
    const el = document.createElement("div");
    document.body.appendChild(el);
    useHiddenBodyOverflow(open);

    return (
      <>
        {open
          ? ReactDOM.createPortal(
              <Element
                ref={ref}
                className={cx(classes.container, className)}
                {...props}
              >
                <div
                  className={cx(
                    classes.absoluteContainer,
                    (modalPopup ? "modalPopup" : "") +
                      (centerPopup ? " popup" : "")
                  )}
                  style={containerStyle}
                >
                  <div
                    className={cx(
                      classes.closeContainer,
                      (modalPopup ? "modalPopup" : "") +
                        (centerPopup ? " popup" : "")
                    )}
                  >
                    <div
                      className={cx(
                        classes.modalContainer,
                        ModalContainerClassName
                          ? ModalContainerClassName
                          : "" +
                              (modalPopup ? " modalPopup" : "") +
                              (centerPopup ? " popup" : "")
                      )}
                      style={wrapperStyle}
                    >
                      <div className={cx(classes.modalContentsContainer)}>
                        <div
                          className={cx(
                            classes.modalContents,
                            !isAgree && classes.isAgree,
                            "modalPopup Agreement"
                          )}
                        >
                          <div
                            className={cx(
                              classes.modalHeader,
                              "modalPopup Agreement"
                            )}
                          >
                            <IcBackArrow
                              onClick={onClose}
                              className={cx(
                                classes.modalBackIcon,
                                "modalPopup Agreement"
                              )}
                            />
                            <span
                              className={cx(
                                classes.modalTitle,
                                "modalPopup Agreement"
                              )}
                            >
                              {title}
                            </span>
                            <IcClose
                              onClick={onClose}
                              className={cx(
                                classes.modalCloseIcon,
                                "modalPopup Agreement"
                              )}
                            />
                          </div>
                          <div
                            className={cx(
                              classes.modalContentText,
                              !isAgree && classes.isAgree
                            )}
                          >
                            {children}
                          </div>
                        </div>
                        {isAgree && (
                          <div className={cx(classes.modalAbsolute)}>
                            <Button fullWidth onClick={handleAgree}>
                              {agreeText}
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Element>,
              document.body as HTMLElement
            )
          : null}
      </>
    );
  }
);

Modal.displayName = "@travelmakers-design/core/Modal";
