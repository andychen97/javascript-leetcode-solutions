/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
// var isPrefixString = function(s, words) {
//     let count = 0;
//     for (let i = 0; i < words.length; i++) {
//         if (count === s.length) {
//             return true;
//         } else if (words[i] !== s.slice(count, words[i].length + count)) {
//             return false;
//         } else {
//             count += words[i].length;
//         }
//     }
//     return true;
// };

const isPrefixString = (s, w) => {
    let tmp = '';
    for (const e of w) {
        tmp += e;
        if (tmp == s) return true; 
    }
    return false;
};