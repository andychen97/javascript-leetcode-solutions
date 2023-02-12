/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    for (let letter of s) {
        map[letter] ? map[letter]++ : map[letter] = 1;
    }
    // let values = Object.values(map).sort((a,b) => b - a);
    let count = 0;
    let single = 1;
    // for (let j = 0; j < values.length; j++) {
    for (let num in map) {
        if (map[num] % 2 === 0) {
            count += map[num];
        } else if (map[num] % 2 === 1 && single < 2) {
            count += map[num];
            single++;
        } else if (map[num] % 2 === 1) {
            count += map[num] - 1;
        }
    }
    return count;
};