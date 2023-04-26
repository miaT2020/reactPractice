import React from "react";
import FunctionContextTheme from "./customHook/FunctionContextTheme";
import ThemeProvider from "./customHook/ThemeContext";

export default function UseContextApp() {
  return (
    <ThemeProvider>
      <FunctionContextTheme />
    </ThemeProvider>
  );
}
