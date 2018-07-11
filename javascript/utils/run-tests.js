/* Don't touch this file unless you know what you're doing */

const path = require('path');
const glob = require('glob');
const Mocha = require('mocha');

const mocha = new Mocha();

const args = process.argv.slice(2);
let testFiles = glob.sync(`**/*.test.js`);

if (args.length > 0)
  testFiles = testFiles.filter(tf => args.filter(af => tf.endsWith(af + '.test.js')).length > 0);

testFiles.map(mocha.addFile.bind(mocha));
mocha.run(fails => process.exitCode = fails ? 1 : 0);
