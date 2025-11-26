const removeFromArray = function(arr) {
    let array = arr[0]
    arr = arr.slice(1)
    let val
    for (let i = 0; i < arr.length; i++) {
        val = arr[i]
        array = array.filter(num => num !== val)
    }
    return array
};


// Do not edit below this line
module.exports = removeFromArray;
