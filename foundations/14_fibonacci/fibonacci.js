const fibonacci = function(check) {
    let number = Number(check);
    if(number < 0){
        return "OOPS"
    }
    else if (number === 0){
        return 0;
    }
    else if (number === 1){
        return 1;
    }
     else if (number === 2){
        return 1;
    }

    let fibOne = 1;
    let fibTwo = 1;
    let fibTemp;

    while (number > 2){
        fibTemp = fibOne + fibTwo;
        fibOne = fibTwo;
        fibTwo = fibTemp;
        number --;
    }
    return fibTemp;
};

// Do not edit below this line
module.exports = fibonacci;