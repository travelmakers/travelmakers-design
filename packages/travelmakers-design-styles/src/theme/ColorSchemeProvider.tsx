import React, { createContext, useContext, useEffect, useState } from "react";

import { ColorScheme } from "./types";

interface ColorSchemeContextProps {
  colorScheme: ColorScheme;
  toggleColorScheme(colorScheme?: ColorScheme): void;
}

const ColorSchemeContext = createContext<ColorSchemeContextProps>(null);

export const useTmColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);

  if (!ctx) {
    throw new Error(
      "useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component"
    );
  }

  return ctx;
};

interface ColorSchemeProviderProps extends ColorSchemeContextProps {
  children: React.ReactNode;
}

export const ColorSchemeProvider = ({
  colorScheme,
  toggleColorScheme,
  children,
}: ColorSchemeProviderProps) => {
  const [key, setKey] = useState("init");

  useEffect(() => {
    setKey("update");
  }, []);

  return (
    <ColorSchemeContext.Provider
      key={key}
      value={{ colorScheme, toggleColorScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

ColorSchemeProvider.displayName =
  "@travelmakers-design/styles/ColorSchemeProvider";
