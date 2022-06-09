/* eslint-disable no-undef */
'use strict';

const isPalindrome = (x) => {
  let array = x.toString().split('');
  let newArray = [];
  for (let i = array.length - 1; i > array.length / 2 - 1; i--) {
    newArray.push(array[i]);
  }
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== newArray[i]) {
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;
