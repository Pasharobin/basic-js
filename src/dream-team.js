const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  let str = "";

  members.forEach(function (e) {
    if (typeof(e) == "string") {
      let n = e.trim().toUpperCase();
      str += n[0];
    }
  });

  if (str.length == 0) {
    return false;
  }
  else
  return str.split("").sort().join("");
};
