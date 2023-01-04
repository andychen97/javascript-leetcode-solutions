/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let first = roman[s[i]];
        let next = roman[s[i + 1]];
        first < next ? count -= first : count += first;
    }
    return count;
}

