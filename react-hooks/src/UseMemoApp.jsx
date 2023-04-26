import { useState, useMemo, useEffect } from "react";

//when update state, it's going to rerender  the whole things inside function
//will be executed entire component, going to run this entire function
//from the top to the bottom, the slow function gets call every single time
//when render app component. Wether update a number or change a theme, it will be run
//a hook call useMemo for memoization which caching a value so you don't have to rerender
//recomputer the value every time, the slow function same input and output, so we can
//cache the output if the input doesn't change.
export default function UseMemoApp() {
  const [number, setNumber] = useState(0);
  const [dark, setDart] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  //second parameter: list of dependencies, in our case
  //only dependencies are the number, number is the only
  //thing changes. if number is changed, it will rerun
  //the slow function every time. if number is not changed, it will rerun
  //no need to run the slow function

  const themeSytles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  //has a array [themeSytles] as dependency
  //add useEffeact code to test referential equality, every time number change (not theme change)
  //the function get new a new theme styles object created,this new
  //theme styles object  is not same as the old theme style object.
  //when dependencies change, it's going to rurun the hooks
  useEffect(() => {
    console.log("theme changed ");
  }, [themeSytles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDart((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeSytles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(number) {
  console.log("calling form slow function");
  for (let i = 0; i < 100000000000; i++) {
    return number * 2;
  }
}

//referential equality (value vs reference)
//when compare two different varaibles in javscript,
//it is going to compare the reference, in the case of
//objects and arrays, so for exmapl, this tehm style
//here is a specific object, if duplicate the theme style
//const themeSytles1 = {
//   backgroundColor: dark ? "black" : "white",
//   color: dark ? "white" : "black",
// };
// looks same, but in javascript, they reference 2 diffrent
// objects that have the same value. the actual reference to
// the object itself is different, so we can compare them.
