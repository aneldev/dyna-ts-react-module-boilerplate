# About

Webpack boilerplate for Typescript React Components to use as a module in other apps or other modules.

Develop, debug, test, Storybook, and distribute React component(s).

# Usage

Replace the `my-component` with the name of your new module. 
```
git clone http://github.com/aneldev/dyna-ts-react-module-boilerplate my-component
cd my-component
yarn run create
```

That's all. 

# Why is `create-react-app` different?

It is different because `create-react-app` creates React applications and includes everything an application needs.

The `dyna-ts-react-module-boilerplate` creates React modules (reusable components). It creates React components that will be used in React applications or other modules.

# Supported React versions

|React version|Git entity|Name|
|:---:|---|---|
|15|tag|v4.1.5|
|16|branch|master|
|17|branch|react-v17|

# Features

- Write in Typescript, .tsx, .ts, but also .jsx & .js are supported`
- Ready for react-router, dev server serves deep links and multiple ports
- Load inline images
- Configured font loader
- Lint
- Supports CSS, SCSS & LESS at the same time
- CSS modules (with `*.module.less/scss` filename pattern)
- Test with Jest, snapshots
- Analyse dependencies with Webpack Analyser
- Distribute as a module with TypeScript Definitions (ready to import)
- Distributed versions work in Javascript and Typescript projects
- Detect circular dependencies (where leads to import `undefined` or `null` values)

# Environment

This boilerplate runs only under Linux.

Scripts of this package are not designed for Windows command line!

For windows users there are multiple ways: 
- [Git bash](https://git-scm.com/downloads) (probably you have this already installed on your machine)
- [Win10 Ubuntu shell](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/) _recommended for windows users_
- [Cygwin terminal](http://www.cygwin.com/)
- Any other bash command line

# Folder structure

The source code of your project is under the `/src/` folder only. The distributed module is what is exported from the `/src/index.tsc` only.

There are loaders for various files, like: `.less`, `.scss`, `.svg`, `.jpg`, `etc.`. Loaders *are loaded* in `/webpack.loaders.js`, where you can add your own loaders that will be used for all tasks (npm scripts).

# Develop

You can develop using the Storybook or create your app. In any case on `yarn release`, only what is exported by `src/index.tsx` will be released.

If you want to add a dependency that will be used only in a Story or in your custom app install is as `dev` dependency.

## Start the Storybook

Stories are all files with extension `.stories.tsx`. There is already a `stories` folder, but story files would be anywhere.

`yarn storybook`

Or `yarn storybook-at <custom port>` to open Storybook on custom port. 

## Start an app

If you don't want to use the Storybook, you can create your app.

Under the `/dev/app/` folder, a small web application can use your module component in different ways. 
This way, you can develop, debug, and create a demo of your component.

`yarn start`

or, if you want to start it to a different port `yarn start-to -- 3232` to start in port 3232.

Like an App, this boilerplate uses the `dyna-showcase` where it is a very light StoryBook like solution. 
One of the benefits is that it is speedy compared with StoraBook, and you can see the actual edges of the components (for high fidelity dev).
It is ideal for development, but you can easily replace it with yours, `yarn remove dyna-showcase`, and write your app under the `/dev` folder.

_StoryBook is still available!_

## Lint

`yarn lint`

Update the `tslint.json` with your own preferences.

## Analyse dependencies

Run `yarn build-analyze` and check which dependencies will be delivered in your module. 

# Test

## Write tests

For tests, this boilerplate uses the [Jest](https://facebook.github.io/jest/).

Test files can be anywhere but they should have a name `*.(test|spec).(ts|tsx|js|jsx)`. There is a `tests/` folder if you want to use it but this is not mandatory.

## Run tests
 
Call `yarn test` to run your tests and coverage.

Call `yarn test-watch` to run your tests after any change, with no coverage.

# Build

`yarn build`

Build creates your distributable version of your component under `./dist`. Typescript's declaration will be there too.

You don't need to use the `build`, since the `release` script calls the `build`.

You will need this is if you have linked this package with another local package (like `yarn link` or so).

# Release

`yarn release`

- builds the component
- bumps the patch version
- publishes to npm _and_
- it pushes the changes to your repo

The output is not compressed, while it is intended to be used in other apps where it will be bundled and compressed. This also makes your component debuggable.

**For private packages**, where you don't want to expose them to `yarn`, remove the `yarn pulish` call from the `publish-push` script.

# Exclude dependencies from the output bundle

You can exclude dependencies from the distributed bundle by declaring them in the `/webpack.dist.config.js`. By default, all dependencies are declared there. 

# Features

## Link with `sync-usages`

### About

Link your modules easily with the `yarn sync-usages --watch` watcher script.

In case that the `yarn link` doesn't work for any reason, this boilerplate offers a "copy" approach to update the packages.

The script performs:

- Scans deeply for usages of this package in all siblings folders
- Updates all usages with the content of this package, excluding the `node_modules` of this package
- Before the copy clears the target `src` && `dist` folders

### Run

- Call `yarn sync-usages` to sync it once
- Call `yarn sync-usages --watch` for run in watcher mode

### Prerequisite

For all except Mac desktops, you have to install the `rsync` on your system. _See below how to do it._

## Link with `sync-file-deps`

### About

This is the opposite of the `yarn sync-file-deps --watch`. It doesn't sync the package's usages, but it updates this package's dependencies with "file:" as version.

Yarn by default links only on `yarn upgrade` the file dependencies. Use the `sync-usages-watch`.

The script performs:

- Watched the changes of the dependencies
- Deletes, recreates, and copies all items of the dependency folder (as defined in the `file:`)
- It doesn't copy the `node_modules` folder.

### Run

- Call `yarn sync-file-deps` to sync it once
- Call `yarn sync-file-deps --watch` for run in watcher mode

### Prerequisite

For all except Mac desktops, you have to install the `rsync` on your system. _See below how to do it._

## About the `rsync` prerequisite

You have to install the `rsync` on your system.
- For Mac, you don't need to do anything. It is already there.
- For Linux [follow this guide](https://www.hostinger.com/tutorials/how-to-use-rsync)
- For Windows's _not a clear guid has been found, feel free to fork this doc._ 

# Known issues

## HMR performs only full refresh

The callbaks are not called, only the page is refreshed. Forks are welcome.

# Typescript module without React?

If you are interested in a **typescript module**, with other words if you want to implement everything as we do here but without any react components, 
check this out this [dyna-ts-module-boilerplate](https://github.com/aneldev/dyna-ts-module-boilerplate) repo.

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)
