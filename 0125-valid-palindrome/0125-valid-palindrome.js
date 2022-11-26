/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let noSymbols = s.replace(/[^a-zA-Z0-9]/g, '');
    let lowered = noSymbols.toLowerCase();
    let half = Math.floor(lowered.length / 2);
    for (let i = 0; i < half; i++) {
        if (lowered[i] !== lowered[lowered.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
