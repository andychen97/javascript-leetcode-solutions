var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const possible = target - nums[i];
    if (map[possible] !== undefined) {
      return [i, map[possible]];
    } else {
      map[nums[i]] = i;
    }
  }
};

const answer = twoSum([2, 7, 11, 15], 9);
// eslint-disable-next-line no-console
console.log(answer);

/*
Results:
Runtime: 78 ms, faster than 90.08% of JavaScript online submissions for Two Sum.
Memory Usage: 43.2 MB, less than 31.36% of JavaScript online submissions for Two Sum.
*/

var isPalindrome = function (x) {
  const string = x.toString();
  const half = Math.floor(string.length - 1 / 2);
  for (let i = 0; i < half; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const answer2 = isPalindrome(121);
// eslint-disable-next-line no-console
console.log(answer2);

/*
Results:
Runtime: 159 ms, faster than 98.71% of JavaScript online submissions for Palindrome Number.
Memory Usage: 50.4 MB, less than 86.06% of JavaScript online submissions for Palindrome Number.
*/

var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const first = roman[s[i]];
    const next = roman[s[i + 1]];
    first < next ? count -= first : count += first;
  }
  return count;
};

const answer3 = romanToInt('III');
// eslint-disable-next-line no-console
console.log(answer3);

/*
Results:
Runtime: 177 ms, faster than 73.14% of JavaScript online submissions for Roman to Integer.
Memory Usage: 46.8 MB, less than 81.82% of JavaScript online submissions for Roman to Integer.
*/

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  const combined = s + s;
  return combined.includes(goal);
};

const answer4 = rotateString('abcde', 'cdeab');
// eslint-disable-next-line no-console
console.log(answer4);

/*
Results:
Runtime: 61 ms, faster than 94.73% of JavaScript online submissions for Rotate String.
Memory Usage: 42.2 MB, less than 51.59% of JavaScript online submissions for Rotate String.
*/
