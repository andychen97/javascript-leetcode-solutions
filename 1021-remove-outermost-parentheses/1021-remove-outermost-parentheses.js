/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let layer = -1;
    let empty = '';
    for (let i = 0; i < s.length; ++i) {
        if ((s[i] === '(' && ++layer !== 0) || (s[i] === ')' && layer-- !== 0)) {
            empty += s[i];
        }   
    }
    return empty;
};