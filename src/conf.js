const fs = require('fs')
const mkdirp = require('mkdirp')
const { hotelDir, confFile } = require('./common')

// Create dir
mkdirp.sync(hotelDir)

// Defaults
const defaults = {
  port: 2000,
  host: '127.0.0.1',
  timeout: 5000,
  tld: 'dev',
  // Replace with your network proxy IP (1.2.3.4:5000) if any
  // For example, if you're behind a corporate proxy
  proxy: false,
  // Set it to false if you don't want hotel to pass HTTP_PROXY and HTTPS_PROXY
  // to your servers
  http_proxy: true
}

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
