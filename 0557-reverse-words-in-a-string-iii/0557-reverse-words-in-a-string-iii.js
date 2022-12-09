/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splitted = s.split(' ');
    let fliped = splitted.map(word => word.split('').reverse().join(''))
    let joined = fliped.join(' ');
    return joined;
};
