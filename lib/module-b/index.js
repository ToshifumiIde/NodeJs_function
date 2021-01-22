let a = require("../module-a/index");

module.exports = function () {
  a();
  console.log("This is called by module-b index.js");
};
