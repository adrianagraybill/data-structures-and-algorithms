'use strict';

function distributeCandies(candies) {
  let obj = {};
   let objKeys = 0;
  for(let i = 0; i < candies.length; i++ ){
      if(!obj[candies[i]]){
          obj[candies[i]] = 1; 
          objKeys +=1
      }
      else{
          obj[candies[i]] += 1;
      }
  }
   let halfOfCandies = candies.length /2 
   return objKeys > halfOfCandies ? halfOfCandies : objKeys;
}

module.exports = distributeCandies;