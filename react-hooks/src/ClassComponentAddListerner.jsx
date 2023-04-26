import React, { Component } from "react";

export class ClassComponentAddListerner extends Component {
  constructor(props) {
    super(props);
    this.state = { lifeCycle: "constructor" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("Button clicked!");
    this.setState({ lifeCycle: "handleClick" });
  };

  componentDidMount() {
    const button = document.querySelector("button");
    button.addEventListener("click", this.handleClick);
    this.setState({ lifeCycle: "componentDidMount" });
  }

  componentDidUpdate(previouProps) {
    console.log("previouProps = " + previouProps);
    console.log("this.props = " + this.props);
    const button = document.querySelector("button");
    //button.removeEventListener("click", this.handleClick);
    //this.setState({ lifeCycle: "componentDidUpdate" });
  }

  componentWillUnmount() {
    const button = document.querySelector("button");
    button.removeEventListener("click", this.handleClick);
    this.setState({ lifeCycle: "componentWillUnmount" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.lifeCycle}</h1>
        <button>Click me!</button>
      </div>
    );
  }
}
