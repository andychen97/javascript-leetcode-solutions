/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0;
    for (let i = 0; i < operations.length; i++) {
        operations[i].includes('-') ? count-- : count++;
    } 
    return count;
};