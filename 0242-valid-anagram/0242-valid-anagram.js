/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sSplit = s.split('').sort();
    let tSplit = t.split('').sort();
    if (sSplit.length !== tSplit.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (sSplit[i] !== tSplit[i]) {
            return false;
        }
    }
    return true;
};