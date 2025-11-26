const reverseString = function(str) {
    let rev = []
    for (let i = 0; i <= str.length; i++) {
        rev[i] = str.split("")[str.length-i]
    }
    return rev.join("")
};

// Do not edit below this line
module.exports = reverseString;
