const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let copy = arr.slice();

  if (!Array.isArray(copy)) {
    throw new Error("Error");
  } 
  else
  if (copy.length === 0) {
    return copy;
  }

  let result = [];
  let n = [];

  copy.forEach(function (e, i, a) {
    n = [e].slice();

    switch (e) {
      case "--discard-next":
        if (i < a.length - 1) {
          if (a[i + 2] === "--discard-prev" || a[i + 2] === "--double-prev") {
            copy.splice(i, 2);
          }
          else
          copy.splice(i, 1);
          n =[];
        }
        else
        if (i === a.length - 1) {
          n =[];
        }
        break;
      case "--discard-prev":
        if (i > 0) {
          result.pop();
          n = [];
        }
        else
        if (i === 0) {
          n = [];
        }
        break;
      case "--double-next":
        if (i < a.length - 1) {
          n = [a[i + 1]].slice();
        }
        else
        if (i === a.length - 1) {
          n = [];
        }
        break;
      case "--double-prev":
        if (i > 0) {
          n = [a[i - 1]].slice();
        }
        else
        if (i === 0) {
          n = [];
        }
        break;
    }

    result = result.concat(n);
  });

  return result;
};