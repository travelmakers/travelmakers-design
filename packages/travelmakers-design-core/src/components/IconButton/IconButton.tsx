import {
  ClassNames,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { SharedButtonProps } from "../Button/Button";
import { View } from "../View";
import useStyles from "./IconButton.style";

type _SharedIconButtonProps = Omit<SharedButtonProps, "leftIcon" | "rightIcon">;

export type IconButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, _SharedIconButtonProps>;

type IconButtonComponent = <C extends React.ElementType = "button">(
  props: IconButtonProps<C>
) => React.ReactElement;

export const IconButton: IconButtonComponent & { displayName?: string } =
  forwardRef(
    <C extends React.ElementType = "button">(
      {
        children,
        component,
        size = "medium",
        variant: _variant,
        line,
        type = "button",
        disabled = false,
        roundness = false,
        className,
        co,
        overrideStyles,
        ...props
      }: IconButtonProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const { classes, cx } = useStyles(
        {
          variant: _variant,
          size,
          line,
          roundness,
        },
        { overrideStyles, name: "Button" }
      );

      return (
        <View<any>
          component={component || "button"}
          className={cx(
            classes.root,
            classes[line ? "ghost" : "solid"],
            className
          )}
          type={type}
          disabled={disabled}
          ref={ref}
          onTouchStart={() => {}}
          co={co}
          {...props}
        >
          <div className={classes.inner}>{children}</div>
        </View>
      );
    }
  );

IconButton.displayName = "@travelmakers-design/core/IconButton";
