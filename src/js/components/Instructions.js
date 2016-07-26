import React from "react";

export default class Instructions extends React.Component {
    render() {
        return (
            <div id="instructions">
                <div id="inner">
                    <h2>Instructions</h2>
                    <ul>
                        <li>
                            Type <a href="https://help.github.com/articles/about-writing-and-formatting-on-github/" target="blank">GitHub Flavored Markdown</a> into the Input box.
                            It will then be formatted and displayed in the Output box.
                        </li>
                        <li>For example, type _some text_ to display "some text" in italics, or __some text__ to display it in bold.</li>
                        <li>See <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="blank">here</a> for a full cheatsheet.</li>
                    </ul>
                </div>
            </div>
        )
    }
}