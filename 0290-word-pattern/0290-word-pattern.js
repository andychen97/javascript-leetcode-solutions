/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = {};
    let splitted = s.split(' ');
    if (pattern.length !== splitted.length) return false;
    for (let i = 0; i < pattern.length; i++) {
        let mapValues = Object.values(map);
        if (!map[pattern[i]] && !mapValues.includes(splitted[i])) map[pattern[i]] = splitted[i];
        if (map[pattern[i]] !== splitted[i]) return false;
    }
    return true;
};