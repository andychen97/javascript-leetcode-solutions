/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    while(stones.length > 1) {
        const highest = stones.pop();
        const second = stones.pop();
        if (highest !== second) {
            stones.push(highest - second);
            stones.sort((a, b) => a - b);
        }

    }
    return stones.length < 1 ? 0 : stones[0];
};

