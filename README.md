# React Webpack
Describes how to create a simple ReactJS project as [**Webpack**](https://github.com/webpack/webpack).

<div align="center">

<img src="https://coursework.vschool.io/content/images/2018/05/react-webpack-1.png" alt="react+webpack" width="400" height="200">
![npm](https://badgen.net/badge/npm/9.6.7?labelColor=blue&color=black)
![react](https://badgen.net/badge/react/18.2.0?labelColor=blue&color=black)
![react-dom](https://badgen.net/badge/react-dom/18.2.0?labelColor=blue&color=black)
![webpack](https://badgen.net/badge/webpack/5.88.2?labelColor=blue&color=black)
![webpack-cli](https://badgen.net/badge/webpack-cli/5.1.4?labelColor=blue&color=black)
![babel](https://badgen.net/badge/babel/7.22.15?labelColor=blue&color=black)

</div>

# Project Tree
```
react-webpack # root folder
    | build
        | bundle.js # The webpack javascript file is built
        | index.html # html-webpack-plugin
    | src
        | components # The directory contains the components
        | babelrc # Configure the Babel library
        | index.js # The initial npm package file is used to render <App /> into #root
    | public
        | index.html # The root html file contains the #root element
    | webpack.config.js # Convert the index.js file to a webpack file
```

# Setup
### Install React and ReactDOM:
```
$ npm i react react-dom
```

That is when loading the latest version of React if you want to specify which version to load then add @ with version to `react` and `react-dom`.
```
$ npm i react@18.2.0 react-dom@18.2.0
```

Update the project when React and ReactDOM have new versions.
```
$ npm i react@latest react-dom@latest
```

**Import React and ReactDOM into index.js file**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
```

To get ReactDOM support from Client declare from `react-dom/client` instead of `react-dom`.

### Install Webpack:
```
$ npm i webpack webpack-cli --save-dev
```

In there:
- `webpack`: The webpack node module.
- `webpack-cli`: The command line tool we use to interact with webpack.

### Install Babel:
```
$ npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
```

In there:
- `babel-core`: Convert ES6 to ES5.
- `babel-loader`: Allows transferring Javascript files using Babel & Webpack.
- `babel-preset-env`: Preset helps you use the latest Javascript in many different environments (different browsers). This package simply supports converting ES6, ES7, ES8, ES... to ES5.
- `babel-preset-react`: Support converting JSX to Javascript.

### Install CSS-Loader and Style-Loader:

2 libraries make it possible for webpack to load .css files as modules.
```
$ npm i css-loader style-loader --save-dev
```

### Install html-webpack-plugin:

Automate adding `build/bundle.js` to `public/index.html`.
```
$ npm i html-webpack-plugin --save-dev
```

**Add html-webpack-plugin to the project.**
```javascript
...
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
```

### To run Webpack on Web Server, install webpack-dev-server:
```
$ npm i webpack-dev-server --save-dev
```

# Start the React Webpack project
Run the project in the browser using the server.
```
$ npm start
```

Compile the project for production.
```
$ npm run build
```

## Note
`--save-dev` indicates the installed npm package is for development and testing purposes only. The installed package and its version information will be logged in the `"devDependency"` section. If you don't declare `--save-dev`, it will default to `--save` meaning this package is an important part of the application and will be used during application running and saving information version is in `"dependencies"`.

## Results achieved
Start the project using `npm start`.
```
> react_webpack@1.0.0 start
> webpack-dev-server --mode development --open --hot

<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.1:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::42e9:b482:dd1d:cb2a]:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'B:\Lap trinh web\React\react_webpack\public' directory
<i> [webpack-dev-middleware] wait until bundle finished: /
asset bundle.js 1.38 MiB [emitted] (name: main)
asset index.html 275 bytes [emitted]
```
