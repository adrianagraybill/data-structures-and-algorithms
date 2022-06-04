/* eslint-disable no-undef */
'use strict';

const isPalindrome = require('../is-palindrome/is-palindrome');

describe('Is Palindrome', () => {
  it('Given an integer x, return true if x is palindrome integer.', () => {
    let nums = 1235;
    expect(isPalindrome(nums)).toEqual(false);
  });
});

describe('Is Palindrome', () => {
  it('Given an integer x, return true if x is palindrome integer.', () => {
    let nums = 12321;
    expect(isPalindrome(nums)).toEqual(true);
  });
});

describe('Is Palindrome', () => {
  it('Given an integer x, return true if x is palindrome integer.', () => {
    let nums = -12321;
    expect(isPalindrome(nums)).toEqual(false);
  });
});
