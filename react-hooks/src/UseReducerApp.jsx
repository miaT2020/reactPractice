import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREAMENT: "decreament",
};
//reducer function take 2 arguments: current state and acton
//action is what we pass into this dispatch function
//Everytime we call dispatch function is going to set to
//this action varaible here, then our curent state is
//going to be this state varaible and reducer is just going to
//return  new updated state
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREAMENT:
      return { count: state.count - 1 };
    default:
      throw new console.error(); //or return state
  }
}

//object
const initialState = { count: 0 };

export default function UseReducerApp() {
  //return 2 parameters as array, initialvalue usually use object instead of single value
  //const [count, dispatch] =  useReducer(reducer, 0)
  //dispatch is for update state
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREAMENT })}>-</button>
    </div>
  );
}

//give you more concrate way to manage state
//working on complex state changes
//https://www.youtube.com/watch?v=kK_Wqx3RnHk&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=6
