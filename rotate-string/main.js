/*
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/

// write function below
var rotateString = function (s, goal) {
  const combined = s + s;
  return combined.includes(goal);
};

const answer = rotateString('abcde', 'cdeab');
// eslint-disable-next-line no-console
console.log(answer);

// pseudo code
