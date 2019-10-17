'use strict';

const candies = require('../distribute-candies/distribute-candies.js');

describe('Count the candies', () => {
  it('can do stuff', () => {
    expect(candies([1,1,2,2,3,3])).toEqual(3);
  });
}); 
