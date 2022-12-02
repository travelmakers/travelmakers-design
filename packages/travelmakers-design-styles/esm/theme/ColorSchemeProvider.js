import React, { createContext, useContext, useState, useEffect } from 'react';

const ColorSchemeContext = createContext(null);
const useTmColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    throw new Error("useTmColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component");
  }
  return ctx;
};
const ColorSchemeProvider = ({
  colorScheme,
  toggleColorScheme,
  children
}) => {
  const [key, setKey] = useState("init");
  useEffect(() => {
    setKey("update");
  }, []);
  return /* @__PURE__ */ React.createElement(ColorSchemeContext.Provider, {
    key,
    value: { colorScheme, toggleColorScheme }
  }, children);
};
ColorSchemeProvider.displayName = "@travelmakers-design/styles/ColorSchemeProvider";

export { ColorSchemeProvider, useTmColorScheme };
//# sourceMappingURL=ColorSchemeProvider.js.map
