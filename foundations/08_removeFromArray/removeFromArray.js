const removeFromArray = function(array, ...elements) {
    for (const element of elements) {
        let isIn = array.indexOf(element);
        do {
            console.log(isIn);
            if (isIn != -1) {
                array.splice(isIn, 1);
            isIn = array.indexOf(element);
            }
        } while (isIn > 0);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
