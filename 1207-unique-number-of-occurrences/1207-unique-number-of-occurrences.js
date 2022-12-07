/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    let tracker = {};
    for (let i = 0; i < arr.length; i++) {
        if (tracker[arr[i]]) {
            tracker[arr[i]] += 1;
        } else {
            tracker[arr[i]] = 1;
        }
      }
    const counter = Object.values(tracker);
    return counter.length === new Set(counter).size;
};