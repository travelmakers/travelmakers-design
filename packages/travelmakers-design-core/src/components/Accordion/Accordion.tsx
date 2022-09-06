import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
} from "@travelmakers-design/styles";
import React, { Fragment, forwardRef, useState } from "react";

import { AccordionCheck } from "./AccordionCheck";
import { AccordionIcon } from "./AccordionIcon";
import useStyles from "./Accordion.style";

export type AccordionStylesNames = ClassNames<typeof useStyles>;

interface AccordionData {
  question: string;
  answer: string;
}

type AccordionType = "Default" | "Number" | "Checkbox";

export interface AccordionBaseProps
  extends TmComponentProps<AccordionStylesNames> {
  /** Accordion 컴포넌트의 type을 결정합니다. */
  type?: AccordionType;

  /** Accordion 컴포넌트 주제를 입력합니다. */
  data: AccordionData[];

  /** Accordion container에 대한 style을 설정합니다. */
  containerStyle?: React.CSSProperties;

  /** Icon에 대한 style을 설정합니다. */
  iconStyle?: React.CSSProperties;
}

export interface _AccordionProps
  extends AccordionBaseProps,
    TmComponentProps<AccordionStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type AccordionProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, _AccordionProps>;

type AccordionComponent = <C extends React.ElementType = "div">(
  props: AccordionProps<C>
) => React.ReactElement;

export const Accordion: AccordionComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "div">(
      {
        component,
        type = "Default",
        data,
        className,
        containerStyle,
        iconStyle,
        overrideStyles,
        __staticSelector = "div",
      }: AccordionProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const [open, setOpen] = useState(
        Array.from({ length: data.length }, (_, index) => false)
      );
      const Element: any = component || "div";

      const { classes, cx } = useStyles(
        { open },
        { overrideStyles, name: "div" }
      );

      return (
        <div className={cx(containerStyle)}>
          {data?.map((AccordionData, index) => (
            <Element
              ref={ref}
              key={`accordion-${index}`}
              className={cx(classes.container, className)}
            >
              {/* NOTE: Title */}
              <div
                className={cx(classes.row)}
                onClick={() =>
                  setOpen((prevState) => {
                    return prevState?.map((data, innerIndex) =>
                      index === innerIndex ? !data : data
                    );
                  })
                }
              >
                <div className={cx(classes.titleWrap)}>
                  {type === "Number" && (
                    <span className={cx(classes.titleIndex)}>{index + 1}.</span>
                  )}
                  {type === "Checkbox" && (
                    <div style={{ marginRight: 8 }}>
                      <AccordionCheck />
                    </div>
                  )}
                  <span className={cx(classes.title)}>
                    {AccordionData.question}
                  </span>
                </div>

                <AccordionIcon
                  className={cx(classes.icon)}
                  style={{
                    transform: `rotate(${open[index] ? 180 : 0}deg)`,
                    ...iconStyle,
                  }}
                />
              </div>

              {/* NOTE: Content */}
              {open[index] && (
                <div className={cx(classes.content)}>
                  <div className={cx(classes.divider)} />
                  <div className={cx(classes.answerText)}>
                    <span
                      className={cx(classes.answer)}
                      dangerouslySetInnerHTML={{
                        __html: AccordionData?.answer,
                      }}
                    />
                  </div>
                </div>
              )}
            </Element>
          ))}
        </div>
      );
    }
  );

Accordion.displayName = "@travelmakers-design/core/Accordion";
