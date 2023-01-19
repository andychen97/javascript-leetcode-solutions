/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let checkforLetters = new RegExp(/[a-z]/);
    let count = 0;

    for (element of strs) {
        if (Number(element) > count) {
            count = Number(element);
        } else if (checkforLetters.test(element) && element.length > count) {
            count = element.length;
        }
    }
    return count;
};