import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <h1>react-rethink-datepicker</h1>
        <h4> Rethinking the date picker UI with React.js</h4>
        <p>Making date selection work for humans</p>

        <div className="datepicker-container">
          <Example />
        </div>
        <p>
          Based on this{" "}
          <a href="https://uxdesign.cc/rethinking-the-date-picker-ui-99b9dcb303ad">
            article
          </a>{" "}
          by Jason Ford
        </p>
        <p>
          <a href="https://github.com/rajasegar/react-awesome-datepicker-demo">
            Github
          </a>
        </p>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
