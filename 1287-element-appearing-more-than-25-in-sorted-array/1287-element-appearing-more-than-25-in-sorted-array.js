/**
 * @param {number[]} arr
 * @return {number}
 */

// fastest solution
var findSpecialInteger = function(arr) {
    let min = Math.floor(arr.length / 4);
    for (let i = 0; i < arr.length - min; i++) {
        if (arr[i] === arr[i + min]) return arr[i];
    }
}


// My first solution
var findSpecialInteger = function(arr) {
    let map = {};
    for (element of arr) {
        map[element] ? map[element]++ : map[element] = 1;
    }
    
    let count = arr.length;
    for (key in map) {
        if (map[key] / count > 0.25) return parseInt(key);
    }
};