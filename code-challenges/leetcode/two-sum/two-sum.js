'use strict';

const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if ( i !== j && nums[i] + nums[j] === target ) {
        return [i,j];
      }
    }
  }
};

module.exports = twoSum;

