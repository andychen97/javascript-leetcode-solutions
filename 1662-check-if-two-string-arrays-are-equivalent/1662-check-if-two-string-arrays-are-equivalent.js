/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    firstWord = word1.join('');
    secondWord = word2.join('');
    return firstWord === secondWord;
};