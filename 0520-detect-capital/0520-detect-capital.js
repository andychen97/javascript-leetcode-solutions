/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;
    let firstCap = word[0].toUpperCase() + word.slice(1,word.length).toLowerCase();
    if (word === firstCap) return true;
    return false;
};