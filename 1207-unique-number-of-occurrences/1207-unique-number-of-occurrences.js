/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    const obj = {};
    
    for(let el of arr) {
        obj[el] = obj[el] ? ++obj[el] : 1;
    }
    const output = Object.values(obj);
    
    return output.length == new Set(output).size
};

// var uniqueOccurrences = function(arr) {
//     let tracker = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (tracker[arr[i]]) {
//             tracker[arr[i]]++;
//         }
//         tracker[arr[i]] = 1;
//     }
//     const counter = Object.values(tracker);
//     return counter.length === new Set(counter).size;
// };