/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count = 0;
    for (let i = 0; i < sentences.length; i++) {
        lengthOfSentences = sentences[i].split(' ').length;
        if (lengthOfSentences > count) {
            count = lengthOfSentences;
        }
    }
    return count;
};