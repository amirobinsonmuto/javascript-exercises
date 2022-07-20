const fibonacci = function(a) {

    if (a <= 0) {
        return 'OOPS';
    } else {

        let total = 1;
        let num1 = 0;
        let num2 = 1;

        for (let i=1; i<a; i++) {

            total = num1 + num2;
            num1 = num2;
            num2 = total;

        }

        return total;
    }
};



// Do not edit below this line
module.exports = fibonacci;
