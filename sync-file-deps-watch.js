const fs = require('fs');
const cp = require('child_process');
const chokidar = require('chokidar');

const package_ = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const hasPathSlash = folder => folder.split('/').reverse()[0] === '';

console.log('Scanning file dependencies ...');

const syncDeps =
  []
    .concat(
      Object.keys(package_.dependencies).map(dep => ({packageName: dep, resource: package_.dependencies[dep]})),
      Object.keys(package_.devDependencies).map(dep => ({packageName: dep, resource: package_.devDependencies[dep]})),
    )
    .filter(dep => dep.resource.indexOf('file:') === 0)
    .map(dep => {
      dep.resource = dep.resource.substr(5); // remove the "file:"
      if (!hasPathSlash(dep.resource)) dep.resource += '/';
      return dep;
    })

if (syncDeps.length) {
  console.log('Scanning file dependencies');
  syncDeps.forEach(d => console.log(' ', d.packageName));
} else {
  console.error('No file dependencies found, exit');
  process.exit(100);
}

syncDeps
  .forEach(dep => {
    console.log(`Watching changes for ${dep.packageName}`, `../${dep.packageName}/*`);
    let bounceTimer = null;
    chokidar
      .watch(
        `../${dep.packageName}`,
        {
          ignored: path => path.includes('node_modules'),
        },
        // {ignored: /node_modules|(^|[\/\\])\../},
      )
      .on(
        'all',
        (event, path) => {
          // console.log('Changed dependency', dep.packageName, event, path);
          if (bounceTimer) clearTimeout(bounceTimer);
          bounceTimer = setTimeout(() => {
            bounceTimer = null;
            syncDependency(dep);
          }, 100);
        }
      );
  });

const syncDependency = dep => {
  const updateScript =
    [
      `rm -rf ./node_modules/${dep.packageName}`,
      `mkdir ./node_modules/${dep.packageName}`,
      `rsync -av --progress ${dep.resource} ./node_modules/${dep.packageName} --exclude node_modules`,
    ].join('; ');
  execScript(`Syncing dependency ${dep.packageName}`, updateScript).catch(() => undefined);
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
