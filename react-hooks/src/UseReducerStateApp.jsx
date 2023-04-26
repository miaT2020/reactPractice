import React, { useReducer, useState } from "react";
import ToDo from "./components/ToDo";

export const ACTIONS = {
  ADD_TODO: "add-tpdo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
//reducer function take 2 arguments: current state and acton
//action is what we pass into this dispatch function
//Everytime we call dispatch function is going to set to
//this action varaible here, then our curent state is
//going to be this state varaible and reducer is just going to
//return  new updated state
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO: {
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    }
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }

  function newTodo(name) {
    return { id: Date.now(), name, complete: false };
  }
}

//object
const initialState = [];

export default function UseReducerStateApp() {
  //return 2 parameters as array, initialvalue usually use object instead of single value
  //const [count, dispatch] =  useReducer(reducer, 0)
  //dispatch is for update state
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      {todos.map((todo) => (
        <ToDo dispatch={dispatch} key={todo.id} todo={todo} />
      ))}
    </>
  );
}

//give you more concrate way to manage state
//working on complex state changes
//https://www.youtube.com/watch?v=kK_Wqx3RnHk&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=6
