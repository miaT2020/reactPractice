import React, { Component } from "react";

export class ClassCounterState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <button onClick={() => this.resetCount()}>Reset</button>
      </>
    );
  }
}
