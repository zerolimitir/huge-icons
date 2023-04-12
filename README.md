## Huge Icon React Package

<div align="center">

![stars](https://img.shields.io/github/stars/zero-icons/huge-icons?color=gold&style=flat)
[![License NPM](https://img.shields.io/npm/l/react-huge-icons?color=green&style=flat)](https://www.npmjs.com/package/react-huge-icons)
[![Version NPM](https://img.shields.io/npm/v/react-huge-icons?label=version&color=blue&style=flat)](https://www.npmjs.com/package/react-huge-icons)
[![Downloads NPM](https://img.shields.io/npm/dw/react-huge-icons?label=downloads)](https://www.npmjs.com/package/react-huge-icons)

![Cover Package huge icons](cover.jpg)

</div>

Table Of Content:

- [Huge Icon React Package](#huge-icon-react-package)
- [About the package](#about-the-package)
	- [The figma design](#the-figma-design)
	- [What should we add in the next updates?](#what-should-we-add-in-the-next-updates)
- [Installation](#installation)
- [Usage](#usage)
	- [All mode:](#all-mode)
	- [Example:](#example)
- [Change Size Icon](#change-size-icon)
- [Change Color Icon](#change-color-icon)
- [Add CSS style with class](#add-css-style-with-class)
- [Available props](#available-props)
- [Publisher](#publisher)

## About the package
We are here to convert the Huge Icons package into a ReactJs package. [The document of this package](https://zero-icons.ir/package/react-huge-icons)

PUBLISHED Version 1.0.0

### The figma design

-   [The ui8.net website ](https://ui8.net/halal-lab/products/huge-icon-pack-3000-vector-icons-set)
-   [The figma website ](https://www.figma.com/file/gueKmNsJOUyPlQBwV6CiVL/Huge-Icons)

### What should we add in the next updates?

To see the next updates, see the _[CHANGELOG](https://github.com/zero-icons/react-huge-icons/blob/main/CHANGELOG.md#unreleased)_ file

## Installation

```shell
npm i react-huge-icons
```
or

```shell
yarn add react-huge-icons
```

## Usage

import { Archive } from "react-huge-icons/`{the mode package}`";

### All mode:

- `bulk`
- `outline`
- `solid`

### Example:

```jsx
import { Archive } from "react-huge-icons/outline";

function App() {
	return (
		<div className="App">
			<Archive />
		</div>
	);
}

export default App;
```

## Change Size Icon

```JSX
// with TailwindCss
<Archive className="w-12 h-12"/>
```

```JSX
// with Bootstrap
<Archive className="w-25 h-25"/>
```

```JSX
// with Css Inline in React
<Archive style={{fontSize: "10rem"}}/>
```

## Change Color Icon

```JSX
// Color property CSS => color: #0ea5e9;
```

```JSX
// with TailwindCss // text-red-100 text-white ...
<Archive className="text-primary"/>
```

```JSX
// with Bootstrap // text-warning,text-primary ...
<Archive className="text-success"/>
```

```JSX
// with Css Inline in React // #0ea5e9 , rgb(14, 165, 233)
<Archive style={{color: "#0ea5e9"}}/>
```

## Add CSS style with class

```CSS
.my-icon-class{
	width: 10rem;
	height: 10rem;
	color: #0ea5e9; /* or rgb(14, 165, 233) */
}
```

```JSX
<Archive className="my-icon-class"/>
```

## Available props

| Prop      | Type     | Default |
| --------- | -------- | ------- |
| `title`   | `string` | `empty` |
| `titleId` | `string` | `empty` |

## Publisher

-   _[Peyman Naderi](https://github.com/peymanath)_
-   _[Mohmad Dorqi](https://github.com/mohmad-dorqi)_
