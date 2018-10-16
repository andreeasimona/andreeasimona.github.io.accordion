# Accordion menu

Accordion menu usinf Vanila Javascript and Sass

## Table of contents
1. [ Demo ](#demo)
2. [ Install ](#install)
3. [ Run in local enviroment ](#run)
4. [ Deploy ](#deploy)
5. [ Build ](#build)
6. [ Eslinter ](#eslint)
7. [ Libraries used for development ](#librariesDevelopment)
8. [ Libraries used for testing ](#librariesTesting)

<a name="demo"></a>
## 1. Demo
   https://andreeasimona.github.io/accordion/

<a name="install"></a>
## 2. Install in local enviroment. Before executing any script you should install the npm packages.

   - npm install

<a name="run"></a>
## 3. Run in local enviroment.

   - npm start

<a name="deploy"></a>
## 4. To deploy the project. The project is deploying to the folder docs, used for the gh-page.

   - npm run deploy

<a name="build"></a>
## 5. To build the project in local enviroment

   - npm run build

<a name="eslint"></a>
## 6. For airbnb eslint check, type in the root folder of the project:
   - npm run linter

<a name="librariesDevelopment"></a>
## 7. Libraries used for development

   - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) This is a webpack plugin that simplifies  the creation of HTML files to serve your webpack bundles.

   - [css-loader](https://github.com/webpack-contrib/css-loader) The css-loader interprets @import and url() like import/require() and will resolve them.
   - [node-sass](https://github.com/sass/node-sass) Node-sass is a library that provides binding for Node.js to LibSass. Allows you to natively compile .scss files to css at incredible speed and automatically via a connect middleware.
   - [sass-loader](https://github.com/webpack-contrib/sass-loader) Loads a Sass/SCSS file and compiles it to CSS.
   - [style-loader](https://github.com/webpack-contrib/style-loader) Adds CSS to the DOM by injecting a <style> tag

   - [webpack](https://webpack.js.org/) Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
   - [webpack-cli](https://webpack.js.org/api/cli/) Command Line Interface for webpack
   - [webpack-dev-server](https://github.com/webpack/webpack-dev-server) Use webpack with a development server that provides live reloading.

   - [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core) Babel compiler core.
   - [babel-loader](https://github.com/babel/babel-loader) This package allows transpiling JavaScript files using Babel and webpack.
   - [babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties) This plugin transforms es2015 static class properties as well as properties declared with the es2016 property initializer syntax.
   - [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) Babel preset for all es2015 plugins.
  

<a name="librariesTesting"></a>
## 8. Libraries used for testing

   - [eslint](https://github.com/eslint/eslint) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
   - [eslint-config-airbnb-base](https://github.com/airbnb/javascript) This package provides Airbnb's base JS .eslintrc as an extensible shared config.
   - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) This plugin intends to support linting of ES2015+ (ES6+) import/export syntax
   - [babel-eslint](https://github.com/babel/babel-eslint) babel-eslint allows you to lint all valid Babel code with the fantastic ESLint.