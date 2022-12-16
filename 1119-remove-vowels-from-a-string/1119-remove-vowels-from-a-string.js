/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let vowels = 'aeiou';
    let string = '';
    for (let i = 0; i < s.length; i++) {
        if (!vowels.includes(s[i])) {
            string += s[i]
        }
    }
    return string;
};