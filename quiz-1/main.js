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
