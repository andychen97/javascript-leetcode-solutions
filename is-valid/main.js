/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// write function below
var isValid = function (s) {
  const brackets = {
    '}': '{',
    ')': '(',
    ']': '['
  };
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      if (arr.length && arr.pop() === brackets[s[i]]) {
        continue;
      } else {
        return false;
      }
    } else {
      arr.push(s[i]);
    }
  }
  return !arr.length;
};

const answer = isValid('[({})()]');
// eslint-disable-next-line no-console
console.log(answer);
