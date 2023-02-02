/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = {};
    for (let i = 0; i < sentence.length; i++) {
        map[sentence[i]] ? map[sentence[i]]++ : map[sentence[i]] = 1;
    }
    return Object.values(map).length === 26;
};