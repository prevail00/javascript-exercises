const reverseString = function(text) {
    let reverseText = ""; //Creates an empty string
    for (let i = 0; i < text.length; i++) {
        reverseText += text.charAt(text.length - (i + 1)); //Fills the string character by character from the original text, going backwards.
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
