// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
  let i = 0;

  while (i < nums.length) {
    let j = 0;
    while (j < nums.length) {
      if (nums[i] !== nums[j] && nums[i] + nums[j] === target) {
        return [i, j];
      }
      j++;
    }
    i++;
  }
};
