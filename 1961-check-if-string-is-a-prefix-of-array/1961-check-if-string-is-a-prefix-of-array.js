/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let tempString = '';
    for (let word of words) {
        tempString += word;
        if (tempString === s) return true;
    }
    return false;
};