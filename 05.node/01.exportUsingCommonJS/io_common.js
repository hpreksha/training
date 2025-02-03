const {exportUsingCommonJS,
    exportUsingCommonJS2,} = require('./utils');

console.log('Import From Utils: ', exportUsingCommonJS()); // Import From Utils:  Hello from Utils
console.log('Import From Utils2: ', exportUsingCommonJS2()); // Import From Utils2:  Hello from Utils2