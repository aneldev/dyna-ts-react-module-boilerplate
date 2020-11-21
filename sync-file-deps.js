const fs = require('fs');
const cp = require('child_process');
const chokidar = require('chokidar');
const {dynaNodeArguments} = require("dyna-node-arguments");

const mode =
  dynaNodeArguments.args.watch === ''
    ? 'WATCH'
    : 'ONCE';

const UPDATE_PACKAGE_DEPENDENCIES = true;
const UPDATE_PACKAGE_DEV_DEPENDENCIES = false;

// core utils
const hasPathSlash = folder => folder.split('/').reverse()[0] === '';
const loadJson = filename => JSON.parse(fs.readFileSync(filename, 'utf8'));
const saveJson = (filename, data) => fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');

const package_ = loadJson('./package.json');

console.log(`${package_.name}: mode: ${mode} Scanning file dependencies...`);

const syncDeps =
  []
    .concat(
      Object.keys(package_.dependencies || {}).map(dep => ({dependencyName: dep, resourceFolder: package_.dependencies[dep]})),
      Object.keys(package_.devDependencies || {}).map(dep => ({dependencyName: dep, resourceFolder: package_.devDependencies[dep]})),
    )
    .filter(dep => dep.resourceFolder.indexOf('file:') === 0)
    .map(dep => {
      dep.resourceFolder = dep.resourceFolder.substr(5); // remove the "file:"
      if (!hasPathSlash(dep.resourceFolder)) dep.resourceFolder += '/';
      return dep;
    })

if (syncDeps.length) {
  console.log('Scanning file dependencies');
  syncDeps.forEach(d => console.log(' ', d.dependencyName));
} else {
  if (mode === "WATCH") {
    console.error('Error: No file dependencies found to watch');
    process.exit(100);
  }
  console.error('Info: No file dependencies found to sync');
  return;
}

if (mode === 'WATCH') {
  syncDeps
    .forEach(dep => {
      console.log(`Watching changes for ${dep.dependencyName}`, `../${dep.dependencyName}/*`);
      let bounceTimer = null;
      chokidar
        .watch(
          `../${dep.dependencyName}`,
          {
            ignored: path => path.includes('node_modules'),
          },
          // {ignored: /node_modules|(^|[\/\\])\../},
        )
        .on(
          'all',
          (event, path) => {
            // console.log('Changed dependency', dep.dependencyName, event, path);
            if (bounceTimer) clearTimeout(bounceTimer);
            bounceTimer = setTimeout(() => {
              bounceTimer = null;
              syncDependency(dep);
            }, 100);
          }
        );
    });
}

if (mode === 'ONCE') {
  setTimeout(()=>{
    syncDeps
      .forEach(syncDependency);
  })
}
const syncDependency = dep => {
  const updateScript =
    [
      `rm -rf ./node_modules/${dep.dependencyName}`,
      `mkdir ./node_modules/${dep.dependencyName}`,
      `rsync -av --progress ${dep.resourceFolder} ./node_modules/${dep.dependencyName} --exclude node_modules`,
    ].join('; ');
  execScript(`Syncing dependency ${dep.dependencyName}`, updateScript).catch(() => undefined);
  updateDeps(dep.dependencyName);
};

const execScript = (description, cli) =>
  new Promise((resolve, reject) => {
    console.log(description, 'syncing...');
    const started = Date.now();
    cp.exec(
      cli,
      {},
      (error, stdout, stderr) => {
        // if (stdout.toString()) console.log('info', stdout.toString());
        if (stderr.toString()) console.log('errors', stderr.toString());

        if (error) {
          console.error(description, 'FAILED', error);
          reject({message: `execScript`, cli, error});
          return;
        }
        console.log(description, `syncing... completed (in ${Date.now() - started}ms)`);
        resolve();
      });
  });

const updateDeps = dependencyName => {
  const dependencyPackage = loadJson(`../${dependencyName}/package.json`);
  let changed = false;

  if (UPDATE_PACKAGE_DEPENDENCIES) {
    if (!package_.dependencies) package_.dependencies = {};
    Object.keys(dependencyPackage.dependencies)
      .forEach(dep => {
        if (package_.dependencies[dep] === undefined) {
          changed = true;
          package_.dependencies[dep] = dependencyPackage.dependencies[dep];
        }
      });
  }

  if (UPDATE_PACKAGE_DEV_DEPENDENCIES) {
    if (!package_.devDependencies) package_.devDependencies = {};
    Object.keys(dependencyPackage.devDependencies)
      .forEach(dep => {
        if (package_.devDependencies[dep] === undefined) {
          changed = true;
          package_.devDependencies[dep] = dependencyPackage.devDependencies[dep];
        }
      });
  }

  if (changed) saveJson('./package.json', package_);
};

