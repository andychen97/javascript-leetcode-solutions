/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    for (account of accounts) {
        let sum = account.reduce((x, y) => x + y);
        if (sum > max) max = sum;
    }
    return max;
};