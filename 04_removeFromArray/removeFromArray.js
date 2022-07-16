const removeFromArray = function(arr, ...theArgs) {
    return arr.filter( function ( el ) {
      return theArgs.indexOf( el ) < 0;
    })
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
