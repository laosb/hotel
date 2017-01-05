const defaults = {
  port: 3100,
  host: '127.0.0.1',
  timeout: 5000,
  tld: 'vvd',
  // Replace with your network proxy IP (1.2.3.4:5000) if any
  // For example, if you're behind a corporate proxy
  proxy: false,
  // Set it to false if you don't want hotel to pass HTTP_PROXY and HTTPS_PROXY
  // to your servers
  http_proxy: true
};

module.exports = defaults;
