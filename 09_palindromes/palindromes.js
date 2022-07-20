const palindromes = function (str) {

    let clean = str.toLowerCase().replace(/[!,. ]/g,'');

    let result = true;

    for (let i=0; i<=clean.length/2-1; i++) {
        if(clean.substr(i, 1) !== clean.substr(-(++i), 1)) {
           result = false;
        } 
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
