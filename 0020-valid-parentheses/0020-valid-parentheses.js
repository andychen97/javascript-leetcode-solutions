/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
   const stack = [];
  const parens = '() {} []';

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    const open = stack[stack.length - 2];
    const closed = stack[stack.length - 1];

    const posParens = open + closed;

    if (parens.includes(posParens)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}