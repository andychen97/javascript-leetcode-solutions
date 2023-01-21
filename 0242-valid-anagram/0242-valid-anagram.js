/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let split = s.split('').sort().join('');
    let tsplit = t.split('').sort().join('');
    return split === tsplit;
};