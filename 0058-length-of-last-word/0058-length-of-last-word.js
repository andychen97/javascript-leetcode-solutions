/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && count > 0) return count;
        if (s[i] !== ' ') count++;
    }
    return count;
};

// var lengthOfLastWord = function(s) {
//     if (s.length === 1) return 1;
//     const splitted = s.split(' ');
//     console.log(splitted);
//     for (let i = splitted.length - 1; i >= 0; i--) {
//         console.log(splitted[i])
//         if (splitted[i].length > 0) {
//             return splitted[i].length;
//         }
//     }
// };
