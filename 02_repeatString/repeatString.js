const repeatString = function(string, num) {

  const arr = []

  for (let i = 0; i < num; i++) {
    arr.push(string) ;
    };

  return arr.join('');
  
}

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
