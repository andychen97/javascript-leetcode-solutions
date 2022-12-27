/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let count = 0;
    for (let i = 0; i < rocks.length; i++) {
        capacity[i] -= rocks[i];
    }
    capacity.sort((a, b) => a - b);
    for (let j = 0; j < capacity.length; j++) {
        if (capacity[j] === 0) {
            count++;
        } else if (additionalRocks >= capacity[j]) {
            additionalRocks -= capacity[j];
            count++;
        } else {
            return count;
        }
    }
    return count;
};