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

var isValid2 = s => {
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
};

const answer2 = isValid2('[({})()]');
// eslint-disable-next-line no-console
console.log(answer2);

// pseudo code.
// create a string map of the parens
// create an empty array and assign it to a variable named stack
// loope through s
// push s[i] to stacl
// assign  stacl at length - 2 to get the open parens
// assign  stacl at length - 1 to get the closed parens
// assign open + closed to a variable named posParens
// check if parens includes posParens
// if so the pop 2 off the stack
// return true/false if the stacl === 0;

const isValid3 = s => {
  const parens = '[] {} ()';
  const stack = [];
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
};

const answer3 = isValid3('[({})()]');
// eslint-disable-next-line no-console
console.log(answer3);
