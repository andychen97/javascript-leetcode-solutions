/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;
    let hash = {};
    for (let i = 0; i < magazine.length; i++) {
        hash[magazine[i]] ? hash[magazine[i]]++ : hash[magazine[i]] = 1
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        if (hash[ransomNote[j]] && hash[ransomNote[j]] !== 0) hash[ransomNote[j]]--;
        else return false;
    }
    return true;
};