import * as fs from 'fs';

const moduleName = process.cwd().replace(/\\/g, '/').split('/').pop();

const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());
delete packageJson.scripts['bootstrap'];
packageJson.name = moduleName;
packageJson.version = '0.0.1';
packageJson.author = '';
packageJson.repository.url = 'http://github.com/YOUR_ACCOUNT/' + moduleName;
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

fs.unlinkSync('./bootstrap.js');

console.log('        vv');
console.log('       vv');
console.log('      vv');
console.log('vv   vv');
console.log(' vv vv');
console.log('  vvv      module ' + moduleName + ' is created successfully');
