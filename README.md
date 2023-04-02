# Huge Icon React Package

<div align="center">

[![Version NPM](https://img.shields.io/npm/v/react-huge-icons?label=version&color=blue&style=flat)](https://www.npmjs.com/package/react-huge-icons)
[![Downloads NPM](https://img.shields.io/npm/dw/react-huge-icons?label=downloads)](https://www.npmjs.com/package/react-huge-icons)
![stars](https://img.shields.io/github/stars/zero-icons/huge-icons?color=gold&style=flat)
[![License NPM](https://img.shields.io/npm/l/react-huge-icons?color=green&style=flat)](https://www.npmjs.com/package/react-huge-icons)
![fork](https://img.shields.io/github/forks/zero-icons/huge-icons?color=purple&style=flat)

![](cover.jpg)

</div>

## About the package
We are here to convert the Huge Icons package into a ReactJs package. [The document of this package](https://zero-icons.ir/package/react-huge-icons)
PUBLISHED Version 1.0.0

developing ...

## Installation

    npm i react-huge-icons

or

    yarn add react-huge-icons

## Usage

#### Outline Icons

```JSX
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

#### Solid Icons

```JSX
import { Archive } from "react-huge-icons/solid";

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
<Archive className="w-12 h-12" />

// with Bootstrap
<Archive className="w-25 h-25" />

// with Css Inline in React
<Archive style={{fontSize: "10rem"}} />

```


## Available props

| Prop      | Type     | Default |
| --------- | -------- | ------- |
| `title`   | `string` | `empty` |
| `titleId` | `string` | `empty` |

## Publisher
-   _[Peyman Naderi](https://github.com/peymanath)_
-   _[Mohmad Dorqi](https://github.com/mohmad-dorqi)_
