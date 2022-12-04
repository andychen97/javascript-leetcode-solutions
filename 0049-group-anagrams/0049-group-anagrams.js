/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //approach: hashmap based on sorted word by character
    // map words to split by character, sort in ascending and join
    const sorted = strs.map(word => word.split('').sort().join(''));
    const hash = {};
    
    // loop through arguemnt to check if sorted in hash else push
    for (let i = 0; i < strs.length; i++) {
        // create an array if not found
        if (!hash[sorted[i]]) {
            hash[sorted[i]] = [strs[i]];
        // if found then push word into found array
        } else {
            hash[sorted[i]].push(strs[i]);
        }
    }
    // return values from object
    return Object.values(hash);
};