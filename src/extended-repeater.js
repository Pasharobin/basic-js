const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, obj) {
  let str = string;
  let arr = [];
  let plus = "";

  if (str === null) {
    str = "null";
  }

  if ("addition" in obj) {
    if (obj["addition"] === null) {
      obj["addition"] = "null";
    }

    if (typeof(str) !== typeof(obj["addition"])) {
      str = str.toString();
      obj["addition"].toString();
    }

    if ("additionRepeatTimes" in obj) {
      for (let i = 0; i < obj["additionRepeatTimes"]; i++) {
        arr.push(obj["addition"]);
      }
      if ("additionSeparator" in obj) {
        plus = arr.join(obj["additionSeparator"]);
      }
      else
      plus = arr.join("|");
    }
    else
    plus = obj["addition"];
  }
  
  arr = [];
  str += plus;

  if ("repeatTimes" in obj) {
    for (let i = 0; i < obj["repeatTimes"]; i++) {
      arr.push(str);
   }
  }
  else
  return str;

  if ("separator" in obj) {
    return arr.join(obj["separator"]);
  }
  else
  return arr.join("+");
};
  