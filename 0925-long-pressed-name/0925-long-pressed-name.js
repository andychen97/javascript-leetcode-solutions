/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// var isLongPressedName = function(name, typed) {
//    if (name[name.length - 1] !== typed[typed.length - 1]) return false;
//     let ind = 0;
//     for (let letter of typed) {
//         if (letter === name[ind]) ind++;
//    }
//     return ind === name.length;
// };

var isLongPressedName = function(name, typed) {
    let i = 0;
    let j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) i++;
        else if (typed[j] !== typed[j - 1]) return false;
        j++;
    }

    return i === name.length;
};