/**
 * 189. Rotate Array

 *Given an array, rotate the array to the right by k steps, where k is non-negative.


 * 
 *  
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  let temp = 0;

  while (l <= r) {
    temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }

  let i = 0;
  let j = k - 1;

  while (i <= j) {
    temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }

  let s = k;
  let e = nums.length - 1;
  while (s <= e) {
    temp = nums[s];
    nums[s] = nums[e];
    nums[e] = temp;
    s++;
    e--;
  }
};
