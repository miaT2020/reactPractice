import { useState, useEffect } from "react";

export function UseEffectApp() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  console.log("render");
  //everytime render, everything inside will execute
  //useEffect take a second pameter as array, everytime the array changes, it will execute
  //act as componentDidMount
  //everytime resounceType changes, it will rerun the effect
  useEffect(() => {
    //set up code act as componentDidMount
    console.log(resourceType);
    console.log("on mount, resource changed");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => setItems(data));

    //return block act as unmount
    return () => {
      console.log("on unmount, return from resouce change");
    };
  }, [resourceType]); //if change to empty array, it will never run effect

  return (
    <>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <h1>{resourceType}</h1>
      <h1>without return </h1>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
      <h1>with return </h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

// /https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=2
//https://blog.webdevsimplified.com/2020-04/use-effect/
