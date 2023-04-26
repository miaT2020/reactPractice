import React, { useContext } from "react";
import { ThemeContext } from "./UseContextTheme";

export default function FunctionContextTheme() {
  const darkTheme = useContext(ThemeContext);
  const themeSytles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={themeSytles}> Class Theme</div>;
}
