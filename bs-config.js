const get = require("lodash/get");

module.exports = {
  ui: {
    port: 3001,
    weinre: {
      port: 8080,
    },
  },
  files: ["**/build/*"],
  watchOptions: {
    usePolling: true,
  },
  server: false,
  proxy: {
    target: "localhost",
  },
  port: 8000,
  logPrefix: "BS",
  ghostMode: false,
};
