const { hotelDir, confFile } = require('../common')
const conf = require('../conf')

function create() {
  if (!fs.existsSync(confFile)) {
    console.log("It's already a project!");
    process.exit(1);
  }
  fs.writeFileSync(confFile, data);
}
