/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    if (k > s.length) return s;
    return s.split(' ').splice(0, k).join(' ');
};

var truncateSentence = function(s, k) {
    if (k > s.length) return s;
    let newSentence = [];
    let splitted = s.split(' ');
    for (let i = 0; i < k; i++) {
        newSentence.push(splitted[i]);
    }
    return newSentence.join(' ');
};