import { CSSObject, Global as EmotionGlobal, css } from "@emotion/react";

import React from "react";
import type { TmTheme } from "../theme/types";
import { useTmTheme } from "../theme/TmProvider";

interface GlobalStylesProps {
  styles(theme: TmTheme): CSSObject;
}

export const Global = ({ styles }: GlobalStylesProps) => {
  const theme = useTmTheme();
  return <EmotionGlobal styles={css(styles(theme))} />;
};
