/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = 'aeiouAEIOU';
    let half = s.length / 2 - 1 ;
    let firstHalfCount = 0;
    let seconfHalfCount = 0;
    for (let i = 0; i < s.length / 2; i++) {
        if (vowels.includes(s[i])) {
            firstHalfCount++;
        }
        if (vowels.includes(s[half + 1 + i])) {
            seconfHalfCount++;
        }
    }
    return firstHalfCount === seconfHalfCount;
};