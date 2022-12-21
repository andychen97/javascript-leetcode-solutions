/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    if (k > s.length) return s;
    return s.split(' ').splice(0, k).join(' ');
};