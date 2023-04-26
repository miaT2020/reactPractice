import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import UseContextApp from "./UseContextApp";
// import { ClassCounterState } from "./ClassCounterState";
// import { FunctionCounterState } from "./FunctionCounterState";
// import { ClassComponentAddListerner } from "./ClassComponentAddListerner";
// import { FunctionAddListernerUseEffect } from "./FunctionAddListernerUseEffect";
// import { UseEffectApp } from "./UseEffectApp";
// import UseEffectListener from "./UseEffectListener";
// import UseMemoApp from "./UseMemoApp";
// import UseRefApp from "./UseRefApp";
// import UseRefElementApp from "./UseRefElementApp";
// import UseContextTheme from "./UseContextTheme";
// import UseReducerApp from "./UseReducerApp";
import UseReducerStateApp from "./UseReducerStateApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <UseContextApp /> */}
    {/* <ClassCounterState />
    <FunctionCounterState /> */}
    {/* <ClassComponentAddListerner /> */}
    {/* <FunctionAddListernerUseEffect /> */}
    {/* <UseEffectApp /> */}
    {/* <UseEffectListener /> */}
    {/* <UseMemoApp /> */}
    <UseReducerStateApp />
  </React.StrictMode>
);
