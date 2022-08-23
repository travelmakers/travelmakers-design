import { ColorSchemeProvider, TmProvider } from "@travelmakers-design/core";

import React from "react";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
  layout: "fullscreen",
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
