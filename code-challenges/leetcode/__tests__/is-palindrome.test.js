/* eslint-disable no-undef */
'use strict';

const isPalindrome = require('../is-palindrome/is-palindrome');

describe('Is Palindrome', () => {
  it('Given an integer x, return true if x is palindrome integer.', () => {
    let x = 1235;
    expect(isPalindrome(x)).toEqual(false);
  });
});

describe('Is Palindrome', () => {
  it('Given an integer x, return true if x is palindrome integer.', () => {
    let x = 12321;
    expect(isPalindrome(x)).toEqual(true);
  });
});

describe('Is Palindrome', () => {
  it('Given an integer x, return true if x is palindrome integer.', () => {
    let x = -12321;
    expect(isPalindrome(x)).toEqual(false);
  });
});
