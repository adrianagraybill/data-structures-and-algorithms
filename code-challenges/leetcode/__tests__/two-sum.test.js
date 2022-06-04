/* eslint-disable no-undef */
'use strict';

const twoSum = require('../two-sum/two-sum');

describe('Two Sum', () => {
  it('Given an array of integers, return indices of the two numbers such that they add up to a specific target.', () => {
    let nums = [1,2,3,4,5];
    expect(twoSum(nums,9)).toEqual([3,4]);
  });
});
