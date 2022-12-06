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
import { View as RnView, ViewProps as RnViewProps } from "react-native";

type ViewComponent = (props: RnViewProps) => React.ReactElement;

export const View: ViewComponent & { displayName?: string } = forwardRef(
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
