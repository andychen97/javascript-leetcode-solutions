/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n < 1) return false;
    let possible = Math.log10(n);
    let base = Math.log10(4);
    return possible / base % 1 === 0;
};