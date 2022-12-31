/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let newString = '';
    for (let i = 0; i < s.length; i = i + k * 2) {
        newString += s.slice(i, i + k).split('').reverse().join('') + s.slice(i + k, i + k * 2);
    }
    return newString;
};
