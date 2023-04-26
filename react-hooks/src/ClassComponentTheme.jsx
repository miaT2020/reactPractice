import React, { Component } from "react";
import { ThemeContext } from "./UseContextTheme";

export default class ClassComponentTheme extends Component {
  themeSytles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
  //darkTheme is from context provider,
  //useing the consumer portion of the context which
  //is a function that pass here, the function is going to
  //have value whick is darkTheme and whatever return from
  //that function is what is going to rendered
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeSytles(darkTheme)}> Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
