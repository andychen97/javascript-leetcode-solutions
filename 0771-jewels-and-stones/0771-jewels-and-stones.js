/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (sub of stones) {
        if (jewels.includes(sub)) {
            count++;
        }
    }
    return count;
};