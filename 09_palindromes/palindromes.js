const palindromes = function (inputString) {
    inputString = inputString.replace(/[^a-zA-Z0-9]/g, '');
    inputString = inputString.toLowerCase();
    let reverseString = ""; //Creates an empty string
    for (let i = 0; i < inputString.length; i++) {
        reverseString += inputString.charAt(inputString.length - (i + 1)); //Fills the string character by character from the original text, going backwards.
    }
    if (inputString === reverseString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
