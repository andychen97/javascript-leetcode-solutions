/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if (new Set(suits).size === 1) return 'Flush';
    let map = {};
    for (let i = 0; i < ranks.length; i++) {
        if (map[ranks[i]] !== undefined) map[ranks[i]]++;
        else map[ranks[i]] = 1;
    }
    let mapped = new Set(Object.values(map))
    if (mapped.size === 1) return 'High Card';
    for (let value of Object.values(map)) {
        if (value > 2) return 'Three of a Kind';
    }
    return 'Pair';
};