/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
  const newA = `0b${a}`
  const newB = `0b${b}`
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`)
  return sum.toString(2)
};