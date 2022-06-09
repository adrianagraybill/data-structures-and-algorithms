/* eslint-disable no-undef */
'use strict';

const stringReversal = (str) => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
};

module.exports = stringReversal;
