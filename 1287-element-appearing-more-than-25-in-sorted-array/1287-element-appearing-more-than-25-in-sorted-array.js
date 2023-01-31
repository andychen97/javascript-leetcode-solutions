/**
 * @param {number[]} arr
 * @return {number}
 */

var findSpecialInteger = function(arr) {
    let min = Math.floor(arr.length / 4);
    for (let i = 0; i < arr.length - min; i++) {
        if (arr[i] === arr[i + min]) return arr[i];
    }
}