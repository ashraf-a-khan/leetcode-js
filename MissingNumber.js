//268. Missing Number

//Given an array nums containing n distinct numbers in the range [0, n],
//return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
  let notI = false;
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) {
      notI = true;
      ans = i;
    }
  }

  if (notI) {
    return ans;
  } else {
    return nums.length;
  }
};
