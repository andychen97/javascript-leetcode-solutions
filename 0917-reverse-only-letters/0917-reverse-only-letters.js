/**
 * @param {string} s
 * @return {string}
 */

var reverseOnlyLetters = function(s) {
    let tempString = '';
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z]/.test(s[i])) tempString += s[i];
    }

    let reversed = tempString.split('').reverse().join('');
    let newString = '';
    let ind = 0;
    for (let j = 0; j < s.length; j++) {
        if (/[a-zA-Z]/.test(s[j])) {
            newString += reversed[ind];
            ind++;
        } else {
            newString += s[j];
        }
    }
    return newString;
};