/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = {};
    for (let i = 0; i < sentence.length; i++) {
        if (map[sentence[i]] !== undefined) {
            map[sentence[i]]++;
        } else {
            map[sentence[i]] = 1;
        }
    }
    return Object.values(map).length === 26;
};