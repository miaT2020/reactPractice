import { useEffect, useState } from "react";

export function FunctionAddListernerUseEffect() {
  const [count, setCount] = useState(0);

  //the everything inside useEffect will run only once
  useEffect(() => {
    console.log(count);
    const handleClick = () => {
      setCount(count + 1);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button>Click me</button>
    </div>
  );
}
