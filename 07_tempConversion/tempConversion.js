const ftoc = function(a) {
  let number = (a-32)*(5/9);
  return Math.round(number * 10) / 10;
};

const ctof = function(a) {
  let number = a*(9/5)+32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
