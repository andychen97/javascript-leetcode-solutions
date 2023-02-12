/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    for (let letter of s) {
        map[letter] ? map[letter]++ : map[letter] = 1;
    }
    let values = Object.values(map).sort((a,b) => b - a);
    let count = 0;
    let single = 1;
    for (let j = 0; j < values.length; j++) {
        if (values[j] % 2 === 0) {
            count += values[j];
        } else if (values[j] % 2 === 1 && single < 2) {
            count += values[j];
            single++;
        } else if (values[j] % 2 === 1) {
            count += values[j] - 1;
        }
    }
    return count;
};