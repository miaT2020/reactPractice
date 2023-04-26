import { useEffect, useRef, useState } from "react";

//useage 1: How ref can be used to sotre value persist
//them across component re-renders
export default function UseRefApp() {
  const [name, setName] = useState("");
  //useState will cause infinite loop
  //const [renderCount, setRenderCount] = useState(0);

  //return on single value, the important things is the
  //return valure of useRef is actually a object {current: 0}
  const renderCount = useRef(0);

  useEffect(() => {
    //useState will cause infinite loop
    //setRerenderCount((prevCount) => prevCount + 1);
    renderCount.current = renderCount.current + 1;
  });

  //ref is very similar to useState and it persist between
  //renders of your component. but ref versus state is taht a
  //ref does not cause your compoenent to re update it gets changed
  //so  instead of using state you should use ref

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I render {renderCount.current} times</div>
    </>
  );
}

//reference elements inside of your html and it's so
//popuular that each element inside of your document has
//ref attribute which is a reference to the element
//you can set that to any ref that you want
