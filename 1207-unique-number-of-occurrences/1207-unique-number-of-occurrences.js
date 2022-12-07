/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    let tracker = {};
    for (let element of arr) {
        if (tracker[element]) {
            tracker[element]++;
        } else {
            tracker[element] = 1;     
        }
    }
    const counter = Object.values(tracker);
    return counter.length === new Set(counter).size;
};