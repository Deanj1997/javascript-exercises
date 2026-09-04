const repeatString = function(string,repeat) {
    let answer = "";

    if(repeat < 0){
        answer = "ERROR";
    }
    else{
        for(i = 0; i < repeat; i++){
            answer += string;
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
