# react-rethink-datepicker

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


Rethinking the date picker UI by making date selection work for humans

Based on this article by Jason Ford
https://uxdesign.cc/rethinking-the-date-picker-ui-99b9dcb303ad

## Install
```
npm install react-rethink-datepicker
```

## Usage
Default usage:
```html
<DatePicker/>
```

With default date set as today:
```html
<DatePicker showToday/>
```

With locale:
```html
<DatePicker showToday locale="fr" onDatePicked={this.onDateSelect} />
```

Getting selected date value on a callback:
```js
onDateSelect(d) {
  console.log(d.toString());
}
```

## Demo
https://rajasegar.github.io/react-rethink-datepicker

## Things to do
- Leap year
- Default Options
- Tests
- Storybook
- Accessibility
- And much more...

## Credits
Jason Ford from UX Collective
https://uxdesign.cc/rethinking-the-date-picker-ui-99b9dcb303ad



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
