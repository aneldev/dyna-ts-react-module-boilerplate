const fs = require('fs');

const isSingleModule = fs.existsSync('./src/index.ts') || fs.existsSync('./src/index.tsx');
const isMultiModule = !isSingleModule;

const tsConfigJson = require('./tsconfig.json');

if (isSingleModule) {
  tsConfigJson.files = [
    fs.existsSync("./src/index.ts") && "./src/index.ts",
    fs.existsSync("./src/index.tsx") && "./src/index.tsx",
  ]
    .filter(Boolean);
}

if (isMultiModule) {
  const getModuleNames =
    root =>
      fs.readdirSync(root, {withFileTypes: true})
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

  const moduleNames = getModuleNames('./src');

  tsConfigJson.files =
    moduleNames
      .map(moduleName => {
        const indexFilename = `./src/${moduleName}/index.ts`;
        if (fs.existsSync(indexFilename)) return indexFilename;
        if (fs.existsSync(indexFilename + 'x')) return indexFilename + 'x';
        return null;
      })
      .filter(Boolean);
}

fs.writeFileSync('./tsconfig.json', JSON.stringify(tsConfigJson, null, 2));
