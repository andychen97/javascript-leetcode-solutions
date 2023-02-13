/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let upperS = s.toUpperCase();
    let newString = '';
    for (let el of upperS) {
        if (/[a-zA-Z0-9]/.test(el)) newString += el;
    }
    let remainder = newString.length % k;
    let arr = remainder > 0 ? [newString.slice(0, remainder)] : [];
    let tempString = ''
    for (let i = remainder; i < newString.length; i += k) {
        arr.push(newString.slice(i, i+k));
    }
    return arr.join('-');
};