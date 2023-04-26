import { useState } from "react";

export function FunctionCounterState() {
  // dufunction components can use multiple useState hooks
  // inside one component it is much more common to have
  // an indivial useState hook for each piece of state
  //so use {0} instead of {count: 0}
  const [count, setCount] = useState(0);
  const [prefererences, setPrefererences] = useState({
    theme: "light",
    fontSize: "12px",
    color: "red ",
  });

  const changeCount = (amount) => {
    setCount((prevcount) => prevcount + amount);
  };

  const reset = () => {
    setCount(0);
  };

  //setPreferences({ color: 'blue' }) is wrong because
  //What this code does is update the entire preferences
  //object to be just { color: 'blue' } without any
  //fontSize and theme. This is because the set method
  //from useState will overwrite the entire value of the state with the new value, so the new value of { clor: 'blue' } overwrites all of the old state.
  //need combine the old state with the new state manually
  const toggleTheme = () => {
    setPrefererences((prevpreferences) => ({
      ...prevpreferences,
      color: prevpreferences.color === "blue" ? "red" : "blue",
      fontSize: prevpreferences.fontSize === "30px" ? "14px" : "30px",
    }));
  };
  const { fontSize, color } = prefererences;
  return (
    <>
      <span
        style={{
          fontSize,
          color,
        }}
      >
        {count}
      </span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </>
  );
}

// Sometimes it is slow to compute the initial state of a component.
//This is not a problem in class components since the initial state computation
//only happens once in the constructor, but in function components the initial state computation
//is declared in the render function and happens every render. Having a slow initial state computation
//can slow down an entire application significantly because of this.

// useState(/* Slow computation */)

// Luckily, useState can also take a function as the argument instead of a value,
//and that function will only be run the very first time a component is rendered.
//By using this function version of useState you will no longer run the slow computation each render,
//but only once on the first render of the component just like class components.

// useState(() => {
//   /* Slow computation */
// })
