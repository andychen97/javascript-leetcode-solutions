/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let ss = {};
    let ts = {};

    for (let i = 0; i < s.length; i++) {
        if (ss[s[i]]) {
            ss[s[i]]++;
        } else {
            ss[s[i]] = 1;
        }
        if (ts[t[i]]) {
            ts[t[i]]++;
        } else {
            ts[t[i]] = 1;
        }
    }
    for (let key in ss) {
        if (ss[key] !== ts[key]) {
            return false;
        }
    }
    return true;
};