# About dyna-ts-module-boilerplate

**Boilerplate with Webpack setup for ES6/ESNEXT for React TypeScript Component Libraries/Packages.**

- Develop in TypeScript
- Debug with Chrome Dev Tools
- Write tests with Jest
- Lint
- Build
- Deploy on Git and npm

This boilerplate includes minimal configuration and dependencies for creating one or multiple modules written in TypeScript.

It can export one module or multiple for explicit imports.

**Happy coding!**

# Not react, just Web or Node library?

This boilerplate is designed for developing React components. However, if you need a lighter boilerplate for node utils, or web utils without react, you can use the 
the [dyna-ts-module-boilerplate](https://www.npmjs.com/package/dyna-ts-module-boilerplate), which is a similar boilerplate but lighter. 

_Again this supports React and JSX but hasn't StoryBook, react ESList etc._

# Why is `create-react-app` different?

It is different because `create-react-app` creates React applications and includes everything an application needs.

The `dyna-ts-react-module-boilerplate` creates React modules (reusable components). It creates React components that will be used in React applications or other modules.

# Usage

```
git clone https://github.com/aneldev/dyna-ts-module-boilerplate.git my-ts-module
cd my-ts-module
pnpm bootstrap
```

> Running `bootstrap` is mandatory to remove the bootstrap scripts and files and start with a clean module. It converts the boilerplate package into a module ready for development.

Then

`git init` for versioning

# Features

- Uses the powerful `pnpm` as a packager, but you can easily replace it with another one
- Written in TypeScript, .tsx, .ts
- Supports CSS, SCSS & LESS at the same time
- Advanced ESLint
- Tested with Jest
- Debugged with Chrome Dev Tools
- Distributes with TypeScript definitions
- Supports distribution of one or multiple modules for explicit import
- Supports distribution of modules for Web and Node
- Analyzes the distribution
- Exports ESNext modules
- Exports Typescript declarations
- Detects circular dependencies (which can lead to `undefined` or `null` imports)
- Monorepo friendly

# Specs

- Webpack 5
- TypeScript v5 with higher restrictions
- Supports ES2019 lib
- React JSX syntax
- Less/Scss module CSS or other loaders
- Image loaders
- ESLint configuration for React and rules
- Webpack analyzer for package content with the [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

# Configuration

This is a **Zero-Configuration** boilerplate!

However, if needed, you should only edit the following:

## Webpack Loaders/Rules

Add them in `/webpack.loaders.js`.

## Webpack Plugins

Add them in `/webpack.plugins.js`.

# Distributions

This boilerplate can export one or multiple independent modules.

## Single module

If the boilerplate finds the `src/index.ts` file, it considers the module *Single*.

**For example:**

Content of `src/index.ts`:
```
export class Invoice {...}
```
From another package, you can import this module like this:
```
import { Invoice } from "my-ts-module";
```

## Multi modules

If the boilerplate cannot find the `src/index.ts` file, it considers the module *Multi*. In this case, the `/src` folder should contain folders, each representing a module with its own `index.ts` file.

This allows making **explicit imports** from other packages or apps improving the tree shaking.

**For example:**

Folder structure:
```
src/Invoice/index.ts   // content: export class Invoice {...}
src/Person/index.ts    // content: export class Person {...}
```
From another package, you can explicit import these modules like this:
```
import { Invoice } from "my-ts-module/dist/Invoice";
import { Person } from "my-ts-module/dist/Person";
```
Similarly, you can distribute modules for specific environments, such as Web or Node, ensuring you import dependencies compatible with the target environment.

The `dist` folder contains only JavaScript code (ES5), without Webpack module loaders, so the code works everywhere as ES5.

## Switching from Single to Multi

1. The `/src` folder should contain only subfolders.
2. Each subfolder is considered an independent module.
3. Each subfolder should have an `/index.ts` that exports what’s needed.
4. Delete the `src/index.ts`.

## Switching from Multi to Single

1. Create the `src/index.ts`.
2. Export what’s needed.
3. The folder structure can be anything.

# Develop

Development is based on [Jest](https://facebook.github.io/jest) tests. After creating something in the `src`, create a Jest test like the [main.test.ts](tests/scripts/main.test.ts) and run or debug it.

**Steps:**

1. Write your Jest tests under the `/test` folder or elsewhere.
2. **Important** Place a `debugger;` statement somewhere; otherwise, the debug runtime won’t stop.
3. Run `pnpm test-debug <name of the test file>`.
4. Open [chrome://inspect/#devices](chrome://inspect/#devices).
5. Select the remote target instance and click `inspect`.
6. Ready for debugging.

**Note:** You might need to press `Resume script` (the `Play` button) to skip some internal Node lib points.

For more information about the tests, read below.

# Analyze

1. Run `pnpm analyse`.

# Test

## Write tests

For testing, [Jest](https://facebook.github.io/jest) is used. Check the documentation for details.

Test files can be located anywhere but should have names in the format `*.(test|spec).(ts|js)`. You can use the `tests/` folder, but it’s not required.

## Run tests

Run `pnpm test` to execute your tests and coverage.

Run `pnpm test-watch` to execute tests on changes.

Run `pnpm test-no-coverage` to run tests without coverage.

Run `pnpm test-update-snapshots` to update the snapshots.

Run `pnpm test-debug` to debug with Chrome Dev Tools.

# Dist / Release

## General

Run `pnpm build` to create a distributable version of your project in the `dist/` folder.

The package configuration exports the `dist/` folder, so you need to run `pnpm build` each time you want to publish this package. TypeScript declarations are included out of the box.

Run `pnpm release` to build, publish to npm, and push to your repo.

# References

[Webpack configuration](https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli)