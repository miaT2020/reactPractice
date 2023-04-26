// import React, { useEffect, useRef, useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   //renderCount is object {current: 1}
//   const renderCount = useRef(1);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });

//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div> I rendered {renderCount.current} times</div>
//     </>
//   );
// }

// import React, { useState, useRef } from "react";

// export default function App() {
//   //const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   function handleClick() {
//     //setCount(count + 1);
//     countRef.current = countRef.current + 1;
//   }

//   return (
//     <div>
//       {/* <p>Count: {count}</p> */}
//       <p>Count (ref): {countRef.current}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }

import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
