import {
  Co,
  PolymorphicComponentProps,
  PolymorphicRef,
  TmComponentProps,
  TmTheme,
  useCss,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";
import { View as RnView, ViewProps } from "react-native";

export const View: ViewProps & { displayName?: string } = forwardRef(
  ({ component, style, ...props }: any, ref: React.RefObject<RnView>) => {
    const Element = component || "View";
    return (
      <>
        <Element ref={ref} style={style} {...props} />
      </>
    );
  }
);

View.displayName = "@travelmakers-design/core/View";
