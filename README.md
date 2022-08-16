## React Drawer

<!-- ![Build](https://github.com/atul15r/react-tabs/actions/workflows/main.yml/badge.svg) -->

<!-- ![Download](https://img.shields.io/npm/dt/@atul15r/react-drawer.svg) -->

**React Drawer is an animated Drawer component which is designed for react
app.**

**[Live Demo](https://codesandbox.io/s/atul15r-react-drawer-n057hd)**

<!-- ![Alt text](visual/react-drawer.gif?raw=true 'React Drawer') -->

# Installation

```js
 # If you use npm:
 npm i @atul15r/react-drawer

 # If you use yarn:
 yarn add @atul15r/react-drawer


 ES6 Usage
 import { Drawer } from '@atul15r/react-drawer';

 Commonjs Usage
 var Drawer = require('@atul15r/react-drawer');

```

# Quick Start

```js


import React, {useState} from 'react';
import { Drawer } from '@atul15r/react-drawer';


const App = () => {
  const [show, setShow]=useState(false)
  const onToggle=()=>setShow(!show)

  return (
   <>
  <button onClick={onToggle}>Show Drawer</button>
  <Drawer
    show={show}
    onClose={onToggle}
   >
   Hello World
   </Drawer>
   </button>
  );
};

export default App;


```

# Usage With Custom Styles

```js

import React, {useState} from 'react';
import { Drawer } from '@atul15r/react-drawer';


const App = () => {
  const [show, setShow]=useState(false)
  const onToggle=()=>setShow(!show)

  return (
   <>
  <button onClick={onToggle}>Show Drawer</button>
  <Drawer
    show={show}
    onClose={onToggle}
    direction="right"
    overlayStyle={{background:"red"}}
   >
   Hello World
   </Drawer>
   </button>
  );
};

export default App;

```

<!-- # Props

| name            | type     | required | default   | description                                                    |
| --------------- | -------- | -------- | --------- | -------------------------------------------------------------- |
| tabs            | array    | true     | []        | it takes an array of object `{ title: string \| ReactNode }[]` |
| tabsClassName   | string   | false    | undefined | add any custom class you want                                  |
| tabsStyle       | object   | false    | undefined | `wrapperStyle= {{ background:"#ccc", color:"#999", ...etc }}`  |
| tabClassName    | string   | false    | undefined | add any custom class you want                                  |
| tabStyle        | object   | false    | undefined | ` itemStyle= {{ padding:4, }}`                                 |
| borderStyle     | object   | false    | undefined | `borderStyle= {{ background:#6b6b6b, }}`                       |
| borderClassName | string   | false    | undefined | add any custom class you want                                  |
| onChange        | function | false    | undefined | ` onChange={(tabIndex)=>setCurrentTab(tabIndex)}`              | -->
