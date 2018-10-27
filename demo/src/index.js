import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import { format } from "date-fns";

import Example from "../../src";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.onDateSelect = this.onDateSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: new Date(),
      locale: "fr"
    };
  }

  handleChange(event) {
    this.setState({ locale: event.target.value });
  }

  onDateSelect(d) {
    this.setState({ date: d });
  }
  render() {
    const { date, locale } = this.state;
    const getLocale = locale => require(`date-fns/locale/${locale}/index.js`);
    return (
      <div>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <h1>react-rethink-datepicker</h1>
        <h4>Making date selection work for humans</h4>
        <p>
          <a href="https://github.com/rajasegar/react-rethink-datepicker">
            Github
          </a>
        </p>

        <p>
          Select Language:
          <select value={locale} onChange={this.handleChange}>
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="eo">Esperanto</option>
            <option value="zh_cn">Chinese Simplified</option>
            <option value="zh_tw">Chinese Traditional</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="nl">Dutch</option>
            <option value="nb">Norwegian Bokmål</option>
            <option value="ca">Catalan</option>
            <option value="id">Indonesian</option>
            <option value="it">Italian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="sv">Swedish</option>
            <option value="tr">Turkish</option>
            <option value="ko">Korean</option>
            <option value="el">Greek</option>
            <option value="sk">Slovak</option>
            <option value="fil">Filipino</option>
            <option value="da">Danish</option>
            <option value="is">Icelandic</option>
            <option value="fi">Finnish</option>
            <option value="th">Thai</option>
            <option value="hr">Croatian</option>
            <option value="ar">Arabic</option>
            <option value="bg">Bulgarian</option>
            <option value="cs">Czech</option>
            <option value="mk">Macedonian</option>
            <option value="ro">Romanian</option>
          </select>
        </p>

        <div className="datepicker-container">
          <Example showToday locale={locale} onDatePicked={this.onDateSelect} />
        </div>
        <p>
          Selected Date:{" "}
          <strong>
            {format(date.toString(), "dddd, D MMMM, YYYY", {
              locale: getLocale(locale)
            })}
          </strong>
        </p>
        <p>{date.toString()}</p>
        <p>
          Based on this{" "}
          <a href="https://uxdesign.cc/rethinking-the-date-picker-ui-99b9dcb303ad">
            article
          </a>{" "}
          by Jason Ford
        </p>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
