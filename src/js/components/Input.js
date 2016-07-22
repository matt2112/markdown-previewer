import React from "react";
import Marked from "marked";

export default class Input extends React.Component {

  handleChange(e) {
      const input = e.target.value;
      this.props.changeInput(input);
  }

  render() {
    return (
        <div className="box">
            <h2>Input</h2>
            <textarea rows="10" cols="50" onChange={this.handleChange.bind(this)} defaultValue="Type _something_ here."></textarea>
        </div>
    )
  }
}