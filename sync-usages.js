const cp = require('child_process');
const chokidar = require('chokidar');
const exec = require('child_process').execSync;
const {dynaNodeArguments} = require("dyna-node-arguments");

const mode =
  dynaNodeArguments.args.watch === ''
    ? 'WATCH'
    : 'ONCE';

const packageName = process.cwd().split('/').reverse()[0];

console.log(`${packageName}: mode: ${mode} Scanning usages on parent folder...`);
const consoleText = exec(
  `cd .. && find -L ./ | grep /${packageName}/package.json`,
  {
    // timeout: timeout,
    // cwd: root
  },
)
  .toString();

const packageUsages = consoleText
  .split('\n')
  .filter(l => !!l.trim())
  .map(l => '..' + l.substr(2))
  .filter(l => l !== `../${packageName}/package.json`)
  .map(l => l.split('/').slice(0, -1).join('/'));


console.log('Scanning completed, found usages for update');
packageUsages.forEach(usage => console.log('  ', usage));

if (!packageUsages.length) {
  console.error('!!! Error: No usages found!');
  process.exit(100);
}

if (mode === 'WATCH') {
  let bounceTimer = null;
  chokidar.watch('.', {ignored: /node_modules|(^|[\/\\])\../}).on('all', (event, path) => {
    console.log('change', event, path);
    if (bounceTimer) clearTimeout(bounceTimer);
    bounceTimer = setTimeout(() => {
      bounceTimer = null;
      syncFolders();
    }, 100);
  });
}


if (mode === 'ONCE') {
  setTimeout(()=>{
    syncFolders();
  })
}

// Internal functions

const createSyncScript = folder => `rm -rf ${folder}/src; rm -rf ${folder}/dist; rsync -av --progress ./* ${folder} --exclude node_modules`;

const syncFolders = () => {
  packageUsages
    .map(path => {
      if (path.indexOf('*tus*') === 0) {
        path = '/mnt/' + path[5].toLowerCase() + path.substr(7).replace(/\\/g, '/')
      }
      return path;
    })
    .forEach(syncFolder);
};

const syncFolder = (folder) => {
  // help: https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback
  console.log(`Syncing folder: [${folder}]`);
  cp.exec(createSyncScript(folder), {}, (error, stdout, stderr) => {
    if (stdout.toString()) console.log('info', stdout.toString());
    if (stderr.toString()) console.log('errors', stderr.toString());

    if (error)
      console.log(`Sync error for folder: [${folder}]`, error);
    else
      console.log('success');
  });
};
