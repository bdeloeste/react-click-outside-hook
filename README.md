# `react-click-outside-hook` 🎣

React Hook implementation with click outside functionality.

## Features

- 🎣 **Hooks API** - Easy to use API thanks to React Hooks

- 🌳 **Tree-shakeable** - Only include the parts you use
- 💥 **Tiny bundle** [~1.9 kB gzipped][bundlephobia-url]

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

The new React Hooks, makes it easier then ever to monitor the `hasClickedOutside` state of
your components. Call the `useInView` hook which will return an array containing a `ref`, the
`hasClickedOutside` status.
Assign the `ref` to the DOM element you want to monitor, and the hook will
report the status.

```jsx
import React from 'react'
import { useClickOutside } from 'react-click-outside-hook'

function Component() {
  const [ref, hasClickedOutside] = useClickOutside()
  return <div ref={ref}>{hasClickedOutside.toString()}</div>
}
```
