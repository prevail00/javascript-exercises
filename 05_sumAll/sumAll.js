const sumAll = function(firstNum, secondNum) {
    if (firstNum < 0 || !Number.isInteger(firstNum) || secondNum < 0 || !Number.isInteger(secondNum)) {
        return "ERROR";
    }
    if (firstNum > secondNum) {
        secondNum = [firstNum, firstNum = secondNum][0];
    }
    let sum = firstNum;
    while (firstNum < secondNum) {
        firstNum++;
        sum += firstNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
