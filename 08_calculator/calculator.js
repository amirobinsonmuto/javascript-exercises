const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	
  let num = 0;

  arr.forEach(function (el) {
    num += el;
  })

  return num;

  }

const multiply = function(arr) {

  return arr.reduce(function(a, b) {
 
    return a*b;
   
  })
};

const power = function(a, b) {
	
  let num = a;

  for (let i=1; i<b; i++) {

    num *= a;
  }

  return num;

};

const factorial = function(a) {
	
  if (a === 0) {
    return 1;
  } else {

  let num = a;

  for (let i=1; i<a; i++){
  num *= a-i;
  }

  return num;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
