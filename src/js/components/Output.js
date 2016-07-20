import React from "react";
import Marked from "marked";

export default class Output extends React.Component {

  getMarkdownText(input) {
    var rawMarkup = Marked("some __text__", {sanitize: true});
    return { __html: rawMarkup };
  }
  
//   handleChange() {
//       this.getMarkdownText(input);
//   }

  render() {
    return (
        <div>
            <h1>Output</h1>
            <p>{this.props.input}</p>
            <div dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
    )
  }
}