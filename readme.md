# Template for a javascript project

This is a template for a javascript project as used by the Game Production team.
The stack includes [Typescript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/), [Ava](https://github.com/avajs/ava), [Nyc](https://github.com/istanbuljs/nyc), [Prettier](https://prettier.io/), [Vue](https://vuejs.org/) and [Webpack](https://webpack.js.org/).

## Features

* Prettier formatting
* ESLint with prettier rules and type checking
* Debugable Ava unit testing with code coverage
* Editor linting and formatting support
* Vue file support with decorator components

## Scripts

* **server:** Run the project on a webpack devserver with hot reload.
* **build:dev** Compile the sourcec ode for development.
* **build:prod:** Compile the source code for production.
* **lint:** Try to compile and run ESLint against the source code and unit tests.
* **format:** Format the source code and unit tests.
* **test:once:** Run the Ava unit tests once.
* **test:watch:** Run the Ava unit tests once and automatically rerun them when the source-code changes.
* **test:junit:** Run the Ava unit tests once and write the results in a jUnit compatible file `tap.xml`.
* **test:coverage:** Run the Ava unit tests once and report on the code coverage.

## Development

Optimized for development using [Visual Studio Code](https://code.visualstudio.com/).
For an optimal performance, use the following tools and extensions:

* [Pretier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
* [Yarn](https://yarnpkg.com/lang/en/)
