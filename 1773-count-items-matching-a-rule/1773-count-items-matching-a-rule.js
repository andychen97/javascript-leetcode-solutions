/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let index;
    if(ruleKey=='type') index = 0;
    else if (ruleKey=='color') index = 1;
    else index = 2;
    
    const result = items.filter(e => e[index] === ruleValue).length;
    return result;
};
