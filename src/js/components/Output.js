import React from "react";
import Marked from "marked";

export default class Output extends React.Component {

  getMarkdownText(input) {
    var rawMarkup = Marked(input, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
        <div className="box" >
            <h2>Output</h2>
            <div id="markdown" dangerouslySetInnerHTML={this.getMarkdownText(this.props.input)} />
        </div>
    )
  }
}