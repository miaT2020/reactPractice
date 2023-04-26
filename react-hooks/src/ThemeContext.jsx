import React, { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  <ThemeContext.Provider value="light">
    value={{ toggleTheme }}
    {children}
  </ThemeContext.Provider>;
}
