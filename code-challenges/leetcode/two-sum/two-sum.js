'use strict';

var twoSum = function(nums, target) {
  let targetOne;
  let targetTwo;
  for(let i = 0; i<nums.length; i++){
    targetOne=nums[i];
    for(let j = 1; j<nums.length; j++){
      targetTwo=nums[j];
      if ((targetOne+targetTwo)===target&&(i!==j)){
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
