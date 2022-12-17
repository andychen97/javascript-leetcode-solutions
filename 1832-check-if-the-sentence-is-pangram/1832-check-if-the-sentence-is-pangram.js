/**
 * @param {string} sentence
 * @return {boolean}
 */
//second attempt;
var checkIfPangram = function(sentence) {
    let charSet = new Set()
    for (let i = 0; i < sentence.length; i++) {
        charSet.add(sentence[i])
        if (charSet.size === 26) {
            return true;
        }
    }
    return false;
}



// first attempt;
// var checkIfPangram = function(sentence) {
//     let letters = 'abcdefghijklmnopqrstuvwxyz';
//     let count = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if (letters.includes(sentence[i])) {
//             letters.replace(sentence[i], '');
//             count++;
//         }
//     }
//     return count > 25;
// };