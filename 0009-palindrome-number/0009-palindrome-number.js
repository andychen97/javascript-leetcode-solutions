/**
 * @param {number} x
 * @return {boolean}
 */

'123321'
length = 6
index = 0 - 5

'121'
length = 3
index = 0 - 2

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