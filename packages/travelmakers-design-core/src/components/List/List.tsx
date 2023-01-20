import {
  ClassNames,
  TmComponentProps,
  useTmTheme,
} from "@travelmakers-design/styles";
import React, { forwardRef } from "react";

import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./List.style";

export type ListStylesNames = ClassNames<typeof useStyles>;

type item = {
  id: string;
  title: string;
  onClick?: () => void;
};

export interface ListProps
  extends TmComponentProps,
    React.ComponentPropsWithoutRef<"div"> {
  /** List 컴포넌트의 description을 정합니다. */
  items?: item[];
}

export const List = forwardRef<HTMLDivElement, ListProps>(
  ({ items, className, co, overrideStyles, ...props }, ref) => {
    const theme = useTmTheme();
    const { classes, cx } = useStyles({}, { overrideStyles, name: "List" });

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        {items?.length > 0 && (
          <View component={"ul"} className={cx(classes.ul)}>
            {items?.map((item) => {
              return (
                <View
                  component={"li"}
                  className={cx(classes.li)}
                  onClick={item.onClick}
                >
                  <Typography
                    family="Pretendard"
                    level="b2"
                    color={theme.colors.navy1}
                    id={item?.id}
                  >
                    {item.title}
                  </Typography>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
);

List.displayName = "@travelmakers-design/core/List";
