/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sNew = s.split('').sort();
    let tNew = t.split('').sort();
    console.log(sNew, tNew)
    for (let i = 0; i < tNew.length; i++) {
        if (sNew[i] !== tNew[i]) return tNew[i];
    }
};