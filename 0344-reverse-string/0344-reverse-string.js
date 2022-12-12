/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let half = Math.floor(s.length / 2);
    for (let i = 0; i < half; i++) {
        let placeholder = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = placeholder;
    }
};