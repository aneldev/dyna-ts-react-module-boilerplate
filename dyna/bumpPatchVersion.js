const dynaNodeFs = require('dyna-node-fs');

(async () => {
  const package_ = await dynaNodeFs.loadJSON('./package.json');
  const versionParts = package_.version.split('.').map(Number);
  versionParts[2]++;
  package_.version = versionParts.join('.');
  await dynaNodeFs.saveJSON('./package.json', package_, true);
  console.log('Bumped to', package_.version);
})()



