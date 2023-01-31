/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let map = {};
    for (element of arr) {
        map[element] ? map[element]++ : map[element] = 1;
    }
    console.log(map)    
    let count = arr.length;
    for (key in map) {
        if (map[key] / count > 0.25) return parseInt(key);
    }
};