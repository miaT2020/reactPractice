import { useEffect, useRef, useState } from "react";

//useage 2: How ref can be used to reference to
//input element or other  DOM element
export default function UseRefElementApp() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  //store privious value
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  //whenever our input ref gets rendered on the screen,
  //it's going to set inputRef variable equal to this
  //document element <input ref={inputRef}  type="text"  value={name} onChange={(e) => setName(e.target.value)} />
  //when we click this  ‘Focus’ button, I want to our
  //focus to be put inside this input
  const focus = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    //this is abuse.it change the value but not state
    //inputRef.current.value = "some value";
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name}, and used to be {prevName.current}
      </div>
      <button onClick={focus}>focus</button>
    </>
  );
}

//reference elements inside of your html and it's so
//popuular that each element inside of your document has
//ref attribute which is a reference to the element
//you can set that to any ref that you want

//useage 3: ref can be used to store previous value
