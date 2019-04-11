# `react-click-outside-hook` 🎣

[![Version Badge][npm-version-svg]][package-url]
[![GZipped size][npm-minzip-svg]][bundlephobia-url]
[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coveralls-svg]][coveralls-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![styled with prettier][prettier-svg]][prettier-url]

React Hook implementation with click outside functionality.

## Features

- 👆 **Support for `pointer` and `touch` events**
- 🎣 **Made with 💖 by React Hooks** - Easy to use API thanks to React Hooks
- 💥 **Tiny bundle** [~850 bytes gzipped][bundlephobia-url]

## Installation

Install using [Yarn](https://yarnpkg.com):

```sh
yarn add react-click-outside-hook
```

or NPM:

```sh
npm install react-click-outside-hook --save
```

## Usage 🎣

#### `useClickOutside`

```js
const [ref, hasClickedOutside] = useClickOutside()
```

The new React Hooks make it easier than ever to monitor the `hasClickedOutside` state of
your components. Call the `useClickOutside` hook which will return an array containing a `ref` and the
`hasClickedOutside` status.
Simply assign the `ref` to the DOM element you want to monitor and the hook will
report the status.

```jsx
import React from 'react'
import { useClickOutside } from 'react-click-outside-hook'

function Component() {
  const [ref, hasClickedOutside] = useClickOutside()
  return <div ref={ref}>{hasClickedOutside.toString()}</div>
}
```

[package-url]: https://npmjs.org/package/react-click-outside-hook
[npm-version-svg]: https://img.shields.io/npm/v/react-click-outside-hook.svg
[npm-minzip-svg]: https://img.shields.io/bundlephobia/minzip/react.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=react-click-outside-hook
[travis-svg]: https://travis-ci.com/bdeloeste/react-click-outside-hook.svg
[travis-url]: https://travis-ci.com/bdeloeste/react-click-outside-hook
[coveralls-svg]: https://coveralls.io/repos/github/bdeloeste/react-click-outside-hook/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/bdeloeste/react-click-outside-hook?branch=master
[license-image]: http://img.shields.io/npm/l/react-click-outside-hook.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-click-outside-hook.svg
[downloads-url]: http://npm-stat.com/charts.html?package=react-click-outside-hook
[prettier-svg]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
