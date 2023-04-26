import React, { useContext } from "react";
import { useThemeContext, useThemeUpdateContext } from "./ThemeContext";

//use the custome hooks (useThemeContext not useContxt)
export default function FunctionContextTheme() {
  const darkTheme = useThemeContext();
  const toggleTheme = useThemeUpdateContext();

  const themeSytles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeSytles}></div>
    </>
  );
}
