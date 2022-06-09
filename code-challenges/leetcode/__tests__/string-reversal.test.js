/* eslint-disable no-undef */
'use strict';

const stringReversal = require('../string-reversal/string-reversal.js');

describe('String Reversal', () => {
  it('Given a string, return a new string with the reversed order of characters.', () => {
    let string = 'apple';
    expect(stringReversal(string)).toEqual('elppa');
  });
});

describe('String Reversal', () => {
  it('Given a string, return a new string with the reversed order of characters.', () => {
    let string = 'hello';
    expect(stringReversal(string)).toEqual('olleh');
  });
});

describe('String Reversal', () => {
  it('Given a string, return a new string with the reversed order of characters.', () => {
    let string = 'You are awesome!';
    expect(stringReversal(string)).toEqual('!emosewa era uoY');
  });
});
