# Simple React 16 Boilerplate
## Specs
- **React 16**
- **Typescript** 2.6.2
  - Awesome Typescript Loader ^3.4.1
- **TSLint** 5.8.0
  - basic React linting
- **SASS-Loader**
  - CSS-Modules and PostCSS
- **HMR**
  - React-Hot-Loader 3.1.3
- **Redux**
  - React-Redux 5.0.6 & HMR Support

## Installation

Just run `yarn install` to setup dependencies

----

#### HMR / Webserver
```
yarn start
```
----
#### Production Build
```
yarn build
```
Output will be in `/dist/` as bundled and uglified/minified JS.
The `index.html` will be generated through the HTML-Webpack-Plugin with the `src/index.html` as template.

----
