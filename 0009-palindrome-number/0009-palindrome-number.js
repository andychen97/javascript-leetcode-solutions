/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    const string = x.toString();
    const half  = Math.floor(string.length - 1 / 2);
    for (let i = 0; i < half; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
