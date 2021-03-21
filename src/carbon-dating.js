const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (!sampleActivity || typeof(sampleActivity) !== "string" || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
    console.log(typeof(sampleActivity));
    return false;
  }

  let n = Number(sampleActivity);

  if (n > MODERN_ACTIVITY || n <= 0 || isNaN(n)) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / n) / (0.693 / HALF_LIFE_PERIOD));
};
