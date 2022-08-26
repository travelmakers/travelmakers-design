import { ColorSchemeProvider, TmProvider } from "@travelmakers-design/core";

import React from "react";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
  layout: "fullscreen",
  docs: {
    theme: themes.light,
  },
  darkMode: { current: "light" },
};

function ThemeWrapper(props: any) {
  const colorScheme = useDarkMode() ? "dark" : "light";
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <TmProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {props.children}
      </TmProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [
  (renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
