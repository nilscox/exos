/* Don't touch this file unless you know what you're doing */

const path = require('path');
const glob = require('glob');

module.exports = (name) => {
  const modulePath = glob.sync(`**/${name}.js`);

  if (modulePath.length < 1)
    return null;

  if (modulePath.length > 1) {
    console.error(`found file ${name}.js multiple times`)
    process.exit(1);
  }

  return require(path.resolve(process.cwd(), modulePath[0]));
};
