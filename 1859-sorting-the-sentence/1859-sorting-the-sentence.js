/**
 * @param {string} s
 * @return {string}
 */

var sortSentence = function(s) {
  let splitted = s.split(' ');
    let sorted = [];
  for (let element of splitted) {
    let index = element[element.length - 1] - 1;
    sorted[index] = element.slice(0, element.length - 1);
  }
  return sorted.join(' ');
};