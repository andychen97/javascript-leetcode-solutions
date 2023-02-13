/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let upperS = s.replaceAll('-', '').toUpperCase();
    let remainder = upperS.length % k;
    let arr = remainder > 0 ? [upperS.slice(0, remainder)] : [];
    let tempString = ''
    for (let i = remainder; i < upperS.length; i += k) {
        arr.push(upperS.slice(i, i+k));
    }
    return arr.join('-');
};