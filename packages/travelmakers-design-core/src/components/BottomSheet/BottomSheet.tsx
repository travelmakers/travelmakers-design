import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design/styles";
import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { Modal } from "../Modal";
import { IcChecked } from "./assets/IcChecked";
import { IcCheckSelectedBeige } from "./assets/IcCheckSelectedBeige";
import { IcDropDown } from "./assets/IcDropDown";
import { IcDropDownWhite } from "./assets/IcDropDownWhite";
import { IcUnCheck } from "./assets/IcUnCheck";

import useStyles from "./BottomSheet.style";

export type BottomSheetStylesNames = ClassNames<typeof useStyles>;

interface BottomSheetAgreement {
  key: string;
  label: string;
  content: string;
}

export interface BottomSheetBaseProps
  extends TmComponentProps<BottomSheetStylesNames> {
  transparent?: boolean;
  defaultSelect?: string[];
  /** 팝업 여부 */
  popup?: boolean;

  /** BottomSheet 들어갈 내용 정의 */
  options?: Array<BottomSheetAgreement>;
  value: { [key: string]: boolean };
  setValue?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
  containerStyle?: React.CSSProperties;
}

export interface _BottomSheetProps
  extends BottomSheetBaseProps,
    TmComponentProps<BottomSheetStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type BottomSheetProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, _BottomSheetProps>;

type TagComponent = <C extends React.ElementType = "div">(
  props: BottomSheetProps<C>
) => React.ReactElement;

export const BottomSheet: TagComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = "div">(
    {
      component,
      transparent = false,
      options = [],
      value,
      defaultSelect = null,
      setValue,
      containerStyle = {},
      popup = false,
      children,
      className,
      overrideStyles,
      __staticSelector = "div",
      ...props
    }: BottomSheetProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const Element: any = component || "div";

    const { classes, cx } = useStyles({}, { overrideStyles, name: "div" });

    const [selectedAgreement, setSelectedAgreement] =
      useState<null | BottomSheetAgreement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isAllChecked = useMemo(() => {
      if (value) {
        return (
          Object.values(value).filter((v) => !!v).length === options.length
        );
      }
    }, [value, options.length]);

    useEffect(() => {
      setValue?.(
        options.reduce((result, item) => {
          if (defaultSelect !== null && defaultSelect.includes(item.key)) {
            result[item.key] = true;
          } else {
            result[item.key] = false;
          }
          return result;
        }, {})
      );
    }, []);

    const handleAllCheck = () => {
      const preValue = {};
      options.map((option) => {
        return (preValue[option.key] = !isAllChecked);
      });
      setValue?.(preValue);
    };

    const handleModalOpen = (v: BottomSheetAgreement) => {
      setSelectedAgreement(v);
      setIsModalOpen(true);
    };

    const handleModalClose = () => {
      setIsModalOpen(false);
    };

    const handleAgree = (v: BottomSheetAgreement) => {
      setValue?.((prev) => ({ ...prev, [v.key]: true }));
      setIsModalOpen(false);
    };

    return (
      <Element
        ref={ref}
        className={cx(
          classes.container,
          transparent && `transparent-agreement`,
          className
        )}
        style={containerStyle}
        {...props}
      >
        {options.length > 1 && (
          <div className={cx(classes.option)} onClick={() => handleAllCheck()}>
            {isAllChecked ? (
              transparent ? (
                <IcCheckSelectedBeige className={cx(classes.optionIcon)} />
              ) : (
                <IcChecked className={cx(classes.optionIcon)} />
              )
            ) : (
              <IcUnCheck className={cx(classes.optionIcon)} />
            )}
            <span className={cx(classes.label)}>전체 동의</span>
          </div>
        )}

        {options.map((option, index) => (
          <div className={cx(classes.option)} key={`option-${option.key}`}>
            {value?.[option.key] ? (
              transparent ? (
                <IcCheckSelectedBeige
                  className={cx(classes.optionIcon)}
                  onClick={() =>
                    setValue?.((prev) => ({
                      ...prev,
                      [option.key]:
                        !prev[option.key] === undefined
                          ? true
                          : !prev[option.key],
                    }))
                  }
                />
              ) : (
                <IcChecked
                  className={cx(classes.optionIcon)}
                  onClick={() =>
                    setValue?.((prev) => ({
                      ...prev,
                      [option.key]:
                        !prev[option.key] === undefined
                          ? true
                          : !prev[option.key],
                    }))
                  }
                />
              )
            ) : (
              <IcUnCheck
                className={cx(classes.optionIcon)}
                onClick={() =>
                  setValue?.((prev) => ({
                    ...prev,
                    [option.key]:
                      !prev[option.key] === undefined
                        ? true
                        : !prev[option.key],
                  }))
                }
              />
            )}
            <div
              className={cx(classes.labelContainer)}
              onClick={() => handleModalOpen(option)}
            >
              <span className={cx(classes.label)}>{option.label}</span>
              {transparent ? (
                <IcDropDownWhite
                  className={cx(classes.moreIcon)}
                  style={{
                    transform: "rotate(0)",
                  }}
                />
              ) : (
                <IcDropDown
                  className={cx(classes.moreIcon)}
                  style={{
                    transform: "rotate(-90deg)",
                  }}
                />
              )}
            </div>
          </div>
        ))}

        {selectedAgreement && isModalOpen && (
          <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            modalPopup={popup}
            ModalContainerClassName={"max-h"}
            handleAgree={() => handleAgree(selectedAgreement)}
            title={selectedAgreement?.label}
            backIcon
          >
            {selectedAgreement?.content}
          </Modal>
        )}
      </Element>
    );
  }
);

BottomSheet.displayName = "@travelmakers-design/core/BottomSheet";
