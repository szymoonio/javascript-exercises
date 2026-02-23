const reverseString = function(string) {
    let reverse = "";
    for (let i = 1; i <= string.length; i++) {
        reverse += string.at(-i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
