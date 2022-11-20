/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim();
    let split = trimmed.split(' ');
    return split[split.length - 1].length;
};