import React from "react";
import Marked from "marked";

import Input from "./Input";
import Instructions from "./Instructions";
import Output from "./Output";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "here is some random text"
    };
  }

  changeInput(input) {
    this.setState({input});
  }

  render() {

    return (
        <div id="main">
          <Input className="sectiony" changeInput={this.changeInput.bind(this)} />
          <Output className="sectiony" input={this.state.input} />
          <Instructions />
        </div>
    )
  }
}