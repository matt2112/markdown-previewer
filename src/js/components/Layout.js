import React from "react";
import Marked from "marked";

import Input from "./Input";
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
        <div>
          <Input changeInput={this.changeInput.bind(this)} />
          <Output input={this.state.input} />
        </div>
    )
  }
}