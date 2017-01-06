const { hotelDir, confFile } = require('../common');
const defaults = require('../conf-defaults');

function init() {
  if (!fs.existsSync(confFile)) {
    console.log("It's already a project!");
    process.exit(1);
  }
  const data = JSON.stringify(defaults, null, 2);
  fs.writeFileSync(confFile, data);
  console.log("Successfully created your project.");
}

module.exports = init;
