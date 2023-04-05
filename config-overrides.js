const { override, useBabelRc } = require("customize-cra");

module.exports = override(useBabelRc());
console.log("ok");
