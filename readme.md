# About

Webpack configuration for ES5/ES6 React components written in Typescript to be used as a module in other apps.

Develop, debug, test and distribute react component(s) easy.

# Develop

## Implement

The source code of your project is under the src/ folder only. What will be distributed is what it is exported from the `src/index.tsc`.

There are loaders for various files, like: `.less`, `.scss`, `.svg`, `.jpg`, `etc.`. Loaders *are loaded* in `webpack.loaders.js`, where you can add your own loaders that will be used from all tasks (npm scripts).

Under the `dev/scripts/` folder there is a small web application that uses this component with one or more ways. By this way you can develop, debug and make a showcase of how your component(s) can be used.

Under the `dev/public/` folder is the http folder of the application, you should not do anything there because this is not distributed.

## Develop / Debug

Implement your component(s) under `src/`.

Implement the usage of your components(s) under `dev/script/`;

Call `npm start`.

Open in any browser http://localhost:8027 to **preview**, **dev** or **debug**.

# Preview

Call `npm start`.

# Test

## Write tests

For tests is used the [Jest](https://facebook.github.io/jest/) also check the documentation.

Test files can be anywhere but they should have a name *.(test|spec).(ts|tsx|js|jsx) . There is a `tests/` folder if you want to use but this is not a limitation.

## Run tests

Call `npm run test` to run your tests.

Call `npm run test-watch` to run your tests on changing of your script.

# Dist / release

Call `npm run dist` or `npm run release`
to create a distributable version of your project
under the `dist/` folder.

The package configuration exports the `dist/` folder so you have call `npm run dist` every time you want to publish this package. The typescript declarations are there out of the box.

The output is not compressed, while it is intended to be used in other apps where there will be bundled and compressed there.

The output of your package is what it is extracted only from your `src/index.jsx`.

**Tip 1:** During development, there is no need to call the `dist` on any code change, you can import the `src/` folder of this module like this: `import MyReactComponentModule from 'my-module/src';` instead of `import MyReactComponentModule from 'my-module';`.

**Tip 2:** You can link this module with your main application using the `npm link` for more reading https://docs.npmjs.com/cli/link.

**Tip 2.1:** With npm > 5.0.0 the above link can be made defining the "file:xxx" instead of the version number, for more reading https://docs.npmjs.com/cli/link.

# Have fun

Feel free to clone and fork.

# Interesting for typescript module?

If you are interesting for **typescript module**, with other words if you want to implement everything like we do here but not exporting directly a react component, check this [dyna-ts-module-boilerplate](https://github.com/aneldev/dyna-ts-module-boilerplate) repo.

