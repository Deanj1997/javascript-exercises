const removeFromArray = function(arr, ...args) {
    let answer = [];
    for(const arg of args){
        arr = arr.filter(num => num !== arg);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
