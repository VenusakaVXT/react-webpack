# React Webpack
Describes how to create a simple ReactJS project as [**Webpack**](https://webpack.js.org/).

# Project Tree
```
react-webpack
    | build # root folder
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
