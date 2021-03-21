const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
  }

  if (!date) {
    return "Unable to determine the time of year!"
  }

  if (getClass(date) !== "Date") {
    throw new Error("Error");
  }

  let m = date.getMonth();

  if ( m >= 2 && m <= 4) {
    return "spring";
  }
  else
  if ( m >= 5 && m <= 7) {
    return "summer";
  }
  else
  if ( m >= 8 && m <= 10) {
    return "autumn";
  }
  else
  return "winter";
};
