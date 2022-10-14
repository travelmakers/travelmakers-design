import {
  ClassNames,
  TmColor,
  TmComponentProps,
  TmPalette,
  TmSize,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { View } from "../View";
import useStyles from "./Callout.style";
import { CalloutAlertIcon } from "./CalloutAlertIcon";

export type CalloutStylesNames = ClassNames<typeof useStyles>;

export interface CalloutProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** Callout 컴포넌트의 타입을 정합니다. */
  type?: "default" | "warning";

  /** Callout 컴포넌트의 타이틀을 정합니다. */
  title: string;

  /** Callout 컴포넌트의 내용을 정합니다. */
  content?: React.ReactNode;
}

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      type = "default",
      title,
      content,
      color,
      className,
      co,
      overrideStyles,
      ...props
    },
    ref
  ) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles(
      { type },
      { overrideStyles, name: "Callout" }
    );

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.titleWrapper)}>
          <CalloutAlertIcon
            color={type === "default" ? theme.colors.green2 : theme.colors.red2}
          />
          <span className={cx(classes.title)}>{title}</span>
        </div>

        <span className={cx(classes.content)}>{content}</span>
      </View>
    );
  }
);

Callout.displayName = "@travelmakers-design/core/Callout";
