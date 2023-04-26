import React, { createContext, useState } from "react";
import ClassComponentTheme from "./ClassComponentTheme";
import FunctionContextTheme from "./FunctionContextTheme";

//when useContext, there are 2 secions
//1. createContext
export const ThemeContext = createContext();

export default function UseContextTheme() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  //2. the context provider wraps all the components inside the ThemeContext
  //that need to acess the information in the ThemeContext
  //it has single prop call value which is ging to be whatever the value of darkTheme is
  //value of your context is, all the children components  inside the ThemeContext
  //have access to the varaibles inside this value prop of
  //context provide, global state of all the children components
  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassComponentTheme />
        <FunctionContextTheme />
      </ThemeContext.Provider>
    </>
  );
}
