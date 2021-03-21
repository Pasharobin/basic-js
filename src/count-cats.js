const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  let count = 0;

  matrix.forEach(function (e) {
    e.forEach(function (n) {
      if (n === "^^") {
        count++
      }
    })
  })

  return count;
};
