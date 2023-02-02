/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = {};
    for (letter of sentence) {
        map[letter] ? map[letter]++ : map[letter] = 1;
    }
    return Object.values(map).length === 26;
};