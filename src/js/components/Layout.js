import React from "react";
import Marked from "marked";

import Input from "./Input";
import Instructions from "./Instructions";
import Output from "./Output";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "Type _something_ here."
    };
  }

  changeInput(input) {
    this.setState({input});
  }

  render() {

    return (
        <div id="main">
          <h1 id="title">freeCodeCamp Markdown Previewer</h1>
          <Input changeInput={this.changeInput.bind(this)} />
          <Output input={this.state.input} />
          <Instructions id="instructions" />
          <div id="footer">Coded by <a href="https://www.freecodecamp.com/matt2112" target="blank">Matt Lewis</a></div>
        </div>
    )
  }
}