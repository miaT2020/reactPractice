import React, { createContext, useContext, useState } from "react";

//create custom context
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

//use the custom context
export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useThemeUpdateContext() {
  return useContext(ThemeUpdateContext);
}

//create provider function (pass {children} not children)
export default function ThemeProvider({ children }) {
  const [darkThem, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkThem}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
