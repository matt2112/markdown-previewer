import React from "react";
import Marked from "marked";

export default class Input extends React.Component {

  handleChange(e) {
      const input = e.target.value;
      this.props.changeInput(input);
  }

  render() {
    return (
        <div>
            <h1>Input</h1>
            <textarea rows="10" cols="50" onChange={this.handleChange.bind(this)}>Here will be the input</textarea>
        </div>
    )
  }
}