/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0;
    for (elements of operations) {
        elements[1] === '-' ? count-- : count++;
    } 
    return count;
};