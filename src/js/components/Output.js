import React from "react";
import Marked from "marked";

export default class Output extends React.Component {

  getMarkdownText(input) {
    var rawMarkup = Marked(input, {sanitize: true});
    return { __html: rawMarkup };
  }
  
//   handleChange() {
//       this.getMarkdownText(input);
//   }

  render() {
    var newInput = this.props.input;
    return (
        <div>
            <h1 id="markdown">Output</h1>
            <p >{this.props.input}</p>
            <div dangerouslySetInnerHTML={this.getMarkdownText(newInput)} />
        </div>
    )
  }
}