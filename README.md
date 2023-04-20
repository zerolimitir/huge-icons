## Huge Icon React Package

<div align="center">
<a href="https://www.buymeacoffee.com/peymanath">
<img width="200" src="https://github.com/zerolimitir/huge-icons/raw/main/bmc-button.png" />
</a>

<a href="http://www.coffeete.ir/peymanath">
<img src="http://www.coffeete.ir/images/buttons/lemonchiffon.png" style="width:260px;" />
</a>
</div>

<div align="center">

![Cover Package huge icons](https://github.com/zerolimitir/huge-icons/raw/main/cover.jpg)

</div>

## Table Of Content:

- [Huge Icon React Package](#huge-icon-react-package)
- [Table Of Content:](#table-of-content)
- [About the package](#about-the-package)
	- [The figma design](#the-figma-design)
- [Installation on All website](#installation-on-all-website)
	- [What should we add in the next updates (Font Package)?](#what-should-we-add-in-the-next-updates-font-package)
- [Usage on Html](#usage-on-html)
- [Change Size Icon on Html](#change-size-icon-on-html)
- [Change Color Icon on Html](#change-color-icon-on-html)
- [Add CSS style with class on React](#add-css-style-with-class-on-react)
- [Installation on React](#installation-on-react)
	- [What should we add in the next updates (React Package)?](#what-should-we-add-in-the-next-updates-react-package)
- [Usage on React](#usage-on-react)
	- [All Icons Mode on React](#all-icons-mode-on-react)
	- [Example on React](#example-on-react)
- [Change Size Icon on React](#change-size-icon-on-react)
- [Change Color Icon on React](#change-color-icon-on-react)
- [Add CSS style with class on React](#add-css-style-with-class-on-react-1)
- [Publisher](#publisher)

## About the package

We are here to convert the Huge Icons package into a ReactJs package. [The document of this package](https://zerolimits.ir/package/react-huge-icons)

### The figma design

-   [The ui8.net website ](https://ui8.net/halal-lab/products/huge-icon-pack-3000-vector-icons-set)
-   [The figma website ](https://www.figma.com/file/gueKmNsJOUyPlQBwV6CiVL/Huge-Icons)

## Installation on All website

<br>

[![License NPM](https://img.shields.io/npm/l/huge-icons?color=green&style=flat)](https://www.npmjs.com/package/huge-icons)
[![Version NPM](https://img.shields.io/npm/v/huge-icons?label=version&color=blue&style=flat)](https://www.npmjs.com/package/huge-icons)
[![Downloads NPM](https://img.shields.io/npm/dw/huge-icons?label=downloads)](https://www.npmjs.com/package/huge-icons)

<br>

### What should we add in the next updates (Font Package)?

To see the next updates, see the _[CHANGELOG](https://github.com/zerolimitir/huge-icons/blob/main/font/CHANGELOG.md#unreleased)_ file

```shell
npm i huge-icons
```

or CDN

```html
<!-- Add this piece of code to the <head> site -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/huge-icons/huge-icons.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

## Usage on Html

Example Solid:

```html
<i class="solid huge-archive-add"></i>
```

Example Outline:

```html
<i class="outline huge-archive-add"></i>
```

## Change Size Icon on Html

```html
<!-- with TailwindCss => text-lg, text-[10px]... -->
<i class="outline huge-archive-add text-lg"></i>
```

```html
<!-- with Css Inline=> font-size:15px;-->
<i class="outline huge-archive-add" style="font-size:20px;"></i>
```

```CSS
.my-icon-class{
	font-size: 10rem;
}
```

```JSX
<i className="solid huge-archive-add my-icon-class"></i>
```

## Change Color Icon on Html

```html
<!-- with TailwindCss => text-red-100, text-green-700... -->
<i class="outline huge-archive-add text-yellow-700"></i>
```

```html
<!-- with Css Inline=> color:#0ea5e9; , color:rgb(14, 165, 233);-->
<i class="outline huge-archive-add" style="color:#fdc435;"></i>
```

```CSS
.my-icon-class{
	color:rgb(14, 165, 233);
}
```

```JSX
<i className="solid huge-archive-add my-icon-class"></i>
```

## Add CSS style with class on React

```CSS
.my-icon-class{
	font-size: 10rem;
	color: #0ea5e9; /* or rgb(14, 165, 233) */
}
.my-icon-class:hover{
	color: #fdc435; /* or rgb(14, 165, 233) */
}
```

```JSX
<Archive className="my-icon-class"/>
```

<br>

## Installation on React

<br>

[![License NPM](https://img.shields.io/npm/l/react-huge-icons?color=green&style=flat)](https://www.npmjs.com/package/react-huge-icons)
[![Version NPM](https://img.shields.io/npm/v/react-huge-icons?label=version&color=blue&style=flat)](https://www.npmjs.com/package/react-huge-icons)
[![Downloads NPM](https://img.shields.io/npm/dw/react-huge-icons?label=downloads)](https://www.npmjs.com/package/react-huge-icons)

<br>

### What should we add in the next updates (React Package)?

To see the next updates, see the _[CHANGELOG](https://github.com/zerolimitir/huge-icons/blob/main/react/CHANGELOG.md#unreleased)_ file

```shell
npm i react-huge-icons
```

or

```shell
yarn add react-huge-icons
```

## Usage on React

import { Archive } from "react-huge-icons/`{the mode package}`";

### All Icons Mode on React

-   `bulk`
-   `outline`
-   `solid`

### Example on React

```jsx
import { Archive } from 'react-huge-icons/outline';

function App() {
    return (
        <div className='App'>
            <Archive />
        </div>
    );
}

export default App;
```

## Change Size Icon on React

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

## Change Color Icon on React

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

## Add CSS style with class on React

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

## Publisher

-   _[Peyman Naderi](https://github.com/peymanath)_
-   _[Mohmad Dorqi](https://github.com/mohmad-dorqi)_
