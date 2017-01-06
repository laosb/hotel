const fs = require('fs')
const mkdirp = require('mkdirp')
const { hotelDir, confFile } = require('./common')
const defaults = require('./conf-defaults');

// Create dir
mkdirp.sync(hotelDir)

// Notify the user if it's not a project
const data = JSON.stringify(defaults, null, 2)
if (!fs.existsSync(confFile)) {
  console.log("You're not in a valid project. Use 'vvd create' to create a new project.");
  process.exit(1);
}

// Read file
const conf = JSON.parse(fs.readFileSync(confFile))

// Assign defaults and export
module.exports = { ...defaults, ...conf }
