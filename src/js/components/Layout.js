import React from "react";
import Marked from "marked";

export default class Layout extends React.Component {
  getMarkdownText() {
    var rawMarkup = Marked('This is _Markdown_.', {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
        <div dangerouslySetInnerHTML={this.getMarkdownText()} />
    )
  }
}