//125. Valid Palindrome

//A phrase is a palindrome if, after converting all uppercase letters into lowercase
//letters and removing all non - alphanumeric characters, it reads the same forward and backward.
//Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function (s) {
  let noSpace = s.replace(/[^a-z0-9]/gi, '');

  noSpace = noSpace.toLowerCase();

  let strToCheck = '';
  for (let i = noSpace.length - 1; i >= 0; i--) {
    strToCheck += noSpace[i];
  }

  return strToCheck === noSpace;
};
