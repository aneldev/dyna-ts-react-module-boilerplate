let fs = require('fs');

const moduleName = process.cwd().replace(/\\/g, '/').split('/').pop();

let package_ = JSON.parse(fs.readFileSync('./package.json').toString());
delete package_.scripts['preinstall'];
delete package_.scripts['create'];
delete package_.scripts['.creation-done'];
package_.name = moduleName;
package_.version = '0.0.1';
package_.author = '';
package_.repository.url = '';
fs.writeFileSync('./package.json', JSON.stringify(package_, null, 2));

fs.unlinkSync('./_boilerplate.js');

console.log('        vv');
console.log('       vv');
console.log('      vv');
console.log('vv   vv');
console.log(' vv vv');
console.log('  vvv      module '+moduleName+' is created successfully');
