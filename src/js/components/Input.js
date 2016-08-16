import React from "react";
import Marked from "marked";

export default class Input extends React.Component {

  handleChange(e) {
      const input = e.target.value;
      this.props.changeInput(input);
  }

  render() {
    return (
        <div className="box input">
            <div className="center">
                <h2 className="header">Input</h2>
                <textarea onChange={this.handleChange.bind(this)} defaultValue="Type _something_ here."></textarea>
            </div>
        </div>
    )
  }
}