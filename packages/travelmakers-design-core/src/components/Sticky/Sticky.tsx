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
import useStyles from "./Sticky.style";

export type StickyStylesNames = ClassNames<typeof useStyles>;

export interface StickyProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {}

export const Sticky = forwardRef<HTMLDivElement, StickyProps>(
  ({ className, co, overrideStyles, ...props }, ref) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles({}, { overrideStyles, name: "Sticky" });

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        {props.children}
      </View>
    );
  }
);

Sticky.displayName = "@travelmakers-design/core/Sticky";
