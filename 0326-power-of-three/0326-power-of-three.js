/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 1) return false;
    let possible = Math.log10(n);
    let base = Math.log10(3);
    return possible / base % 1 === 0;
};
