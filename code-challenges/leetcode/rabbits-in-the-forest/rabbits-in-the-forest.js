'use strict';

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  let storage = {};
  let minumumRabbits = 0;
  answers.forEach(value => {
    if(storage[(value+1)] === true) {
    } else if (value === 0) {
      minumumRabbits+=1;
    } else {
      storage[(value + 1)] = true;
      minumumRabbits = minumumRabbits + value + 1;
    }
  });
  return minumumRabbits;
};

module.exports = numRabbits;

// go through array
// store each value + 1 as a key with the key's value as true (if value exists, do not store, add to minimumRabbits total)
// add each value to minumum rabbits