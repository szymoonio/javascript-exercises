const findTheOldest = function(arr) {
    for (let person of arr) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = 2026;
        }
    }
    return arr.sort((a, b) => ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
