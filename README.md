# About

Webpack configuration for ES5/ES6 React components written in Typescript to be used as a module in other apps.

Develop, debug, test and distribute react component(s) easy.

# Features

- Write in Typescript, .tsx, .ts, but also .jsx & .js are supported
- Ready for react-router, dev server serves deep links
- Load inline images
- Configured font loader
- Load Fonts Awesome
- Supports CSS, SCSS & LESS on the same time
- cssModules (optional), works both SCSS & LESS
- Test with Jest, with snapshots
- Distribute as module with TypeScript Definitions (ready to import)
- Distributed version works in Javascript and Typescript applications

# Installation
```
git clone http://github.com/aneldev/dyna-ts-react-module-boilerplate my-awesome-react-component
cd my-awesome-react-component
npm run create
```
That's it. 

# What is the difference with the `create-react-app`?

`create-react-app` creates react applications, includes whatever an application needs.

`dyna-ts-react-module-boilerplate` creates modules, it creates react components that will be used in react applications.

Instead of `create-react-app` use the `create-react-app-typescript` where is forking the `create-react-app` and supports Typescript.

# Develop

## Implement

The source code of your project is under the src/ folder only. What will be distributed is what it is exported from the `src/index.tsc`.

There are loaders for various files, like: `.less`, `.scss`, `.svg`, `.jpg`, `etc.`. Loaders *are loaded* in `webpack.loaders.js`, where you can add your own loaders that will be used from all tasks (npm scripts).

Under the `dev/scripts/` folder there is a small web application that uses this component with one or more ways. By this way you can develop, debug and make a showcase of how your component(s) can be used.

Under the `dev/public/` folder is the http folder of the application, you should not do anything there because this is not distributed.

## Develop / Debug / Preview

This boilerplate uses the [dyna-showcase](https://github.com/aneldev/dyna-showcase) to show how your module is rendered under different props. The concept is the same as the StoryBook but it is much lighter and without styles. 

- Implement your component(s) under `src/`
- Implement the usage of your components(s) in `dev/scripts/showcase.tsx`
- Call `npm start`
- Open in any browser [http://localhost:3200](http://localhost:3200) to **develop**, **debug** or **preview**.

# Test

## Write tests

For tests is used the [Jest](https://facebook.github.io/jest/) also check the documentation.

Test files can be anywhere but they should have a name *.(test|spec).(ts|tsx|js|jsx) . There is a `tests/` folder if you want to use but this is not a limitation.

## Run tests
 
Call `npm run test` to run your tests and coverage. This test also build your application, ts errors can be shown here.

Call `npm run test-only` to run your tests only including coverage, no build no ts errors.
 
Call `npm run test-watch` to run your tests on any changes, no build, no ts errors, no coverage.

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

# Features (tips)

## Disable the `cssModules`

By default all `.less` and `.scss` files can be used only as [css-modules](https://github.com/css-modules/css-modules). If you don't prefer the cssModule way edit the `/webpack.loaders.js` and set the const `USE_CSSMODULES` to `false`.


## Link your modules easily (with node.js)

In case that npm link doesn't work correctly this boilerplate offer a ready sync mechanism for such as cases.

0. Copy `./syncExternalsList.sample.js` to `./syncExternalsList.js` once only. 
1. Update the `./syncExternalsList.js` list with external apps you want to keep sync.
2. Call `npm run sync-externals`

## Bundle node_modules

By default all node_modules are excluded from the builder. This means that are not in the bundle. 

For debugging reasons... you might want to include them.

In order to include them, edit the webpack.xxx.config.js and comment the `externals: [nodeExternals()]` line.

If you want to exclude specific modules _while are not so clean like `pg`, `helmet`, `express`_, exclude them like this: `externals: ['helmet', 'pg', 'express']`. 

# Known issues

- HMR is not working always

# Missing features

- Support `cssModules` and plain css together
- Add types for `cssModules`

_Forks are welcome!_

# Have fun

Feel free to clone and fork.

# Interesting for typescript module?

If you are interesting for **typescript module**, with other words if you want to implement everything like we do here but not exporting directly a react component, check this [dyna-ts-module-boilerplate](https://github.com/aneldev/dyna-ts-module-boilerplate) repo.

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
 