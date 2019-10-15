'use strict';

const wabbits = require('../rabbits-in-the-forest/rabbits-in-the-forest.js');

describe('Count the wabbits', () => {
  it('can do stuff', () => {
    expect(wabbits([4,2,1,1,0,0])).toEqual(12);
  });
}); 
