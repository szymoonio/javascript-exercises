const sumAll = function(start, end) {
    if (typeof(start) !== 'number' || typeof(end) !== 'number' || Math.floor(start) != start ||
    Math.floor(end) != end || start < 0 || end < 0) {
        return 'ERROR';
    }
    let sum = 0;
    startPoint = start < end ? start : end;
    endPoint = start < end ? end : start;
    i = startPoint;
    while (i <= endPoint) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
