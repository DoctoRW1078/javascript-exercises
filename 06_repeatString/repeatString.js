const repeatString = function(str, num) {
    let og = str
    str = ""
    if (num < 0) {
        return "ERROR"
    } else for (let i = 0; i < num; i++) {
        str += og
    }
    return str
};

// Do not edit below this line
module.exports = repeatString;
