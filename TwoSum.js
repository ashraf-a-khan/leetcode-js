let nums = [3, 2, 4];
let target = 6;

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

// twoSum(nums, target);
console.log(twoSum(nums, target));
