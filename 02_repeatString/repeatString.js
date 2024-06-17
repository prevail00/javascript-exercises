const repeatString = function(word, reps) {
    let i = 0;
    let result;
    if (reps > 0) {
        result = word;
        while (i < (reps - 1)) {
            result += word;
            i++;
        }
    }
    else if (reps == 0) {
        result = "";
    }
    else {
        result = "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
