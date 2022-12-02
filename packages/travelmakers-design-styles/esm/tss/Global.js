import { Global as Global$1, css } from '@emotion/react';
import React from 'react';
import { useTmTheme } from '../theme/TmProvider.js';

const Global = ({ styles }) => {
  const theme = useTmTheme();
  return /* @__PURE__ */ React.createElement(Global$1, {
    styles: css(styles(theme))
  });
};

export { Global };
//# sourceMappingURL=Global.js.map
