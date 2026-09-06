const sumAll = function(a,b) {
    let small = 0;
    let large = 0;

    if (a < 0 || b < 0){return "ERROR"}
    if (!Number.isInteger(a) || !Number.isInteger(b)){return "ERROR"}
    if (a > b){
        small = b;
        large = a;
    }
    else{
        small = a;
        large = b;
    }

    let answer = 0;
    for(let i = small; i <= large; i++){
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
