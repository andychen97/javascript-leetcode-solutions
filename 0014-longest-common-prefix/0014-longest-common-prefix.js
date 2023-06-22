/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    if (strs.length === 1) return '';
    
    let common = '';
    let sorted = strs.sort();
    let shortest = Math.min(sorted[0].length, sorted[sorted.length - 1].length)
    
    for (let i = 0; i < shortest; i++) {
        if (sorted[0][i] === sorted[sorted.length - 1][i]) common += sorted[0][i];
        else return common;
    }
    return common;
};