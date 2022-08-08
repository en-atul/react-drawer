## React Tabs

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**React-Tabs is an animated tab navigation component which is designed for react
app.**

**[Live Demo](https://codesandbox.io/s/atul15r-react-tab-mdnzqn)**

![Alt text](visual/react-tabs.gif?raw=true 'React Tabs')

# Installation

```js
 # If you use npm:
 npm i @atul15r/react-tabs

 # If you use yarn:
 yarn add @atul15r/react-tabs


 ES6 Usage
 import { Tabs } from '@atul15r/react-tabs';

 Commonjs Usage
 var Tabs = require('@atul15r/react-tabs');

```

# Quick Start

```js
<Tabs items={items} />
```

# Usage With Custom Styles

```js

import React from 'react';
import { Tabs } from '@atul15r/react-tabs';

const tabs = [
  {
    title: "TypeScript",

  {
    title: "JavaScript",

  },
];


const App = () => {
  return (
   <Tabs
 tabs={tabs}
 tabStyle={{
         background: `#fff`,
         font-weight: 500,
         color: "#333"
 }}
/>
  );
};

export default App;

```

# Props

| name            | type     | required | default   | description                                                                                                                                     |
|-----------------|----------|----------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| tabs            | array    | true     | []        | it takes an array of object       `{       title: string \| ReactNode   }[]`                                                                    |
| tabsClassName   | string   | false    | undefined | add any custom class you want                                                                                                                   |
| tabsStyle       | object   | false    | undefined |        `wrapperStyle=  {{                    background:"#ccc",                    color:"#999",                    ...etc                  }}` |
| tabClassName    | string   | false    | undefined | add any custom class you want                                                                                                                   |
| tabStyle        | object   | false    | undefined |  `   itemStyle= {{        padding:4, }}`                                                                                                        |
| borderStyle     | object   | false    | undefined |  `borderStyle= {{        background:#6b6b6b, }}`                                                                                                |
| borderClassName | string   | false    | undefined | add any custom class you want                                                                                                                   |
| onChange        | function | false    | undefined |  `   onChange={(tabIndex)=>setCurrentTab(tabIndex)} `                                                                                           |