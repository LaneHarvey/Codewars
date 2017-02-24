// Convert boolean values to strings 'Yes' or 'No'.
// Complete the boolToWord method.

// Given: a boolean value

// Return: a 'Yes' string for true and a 'No' string for false

function boolToWord(bool){
  return bool ? 'Yes':'No';
}

// Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.

function fakeBin(x) {
  var split = x.split('');
  var result = '';
  for (var i=0; i<split.length; i++){
    if(split[i]<5){
      result += 0;
    } else{
      result += 1;
    }
  }
  return result;
}
// Best Practice

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// Filter out the geese
// Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
}

// Heads and Legs
// “A farm contains chickens and cows. There are x legs and y heads. How many chickens and cows are there?”

// Where x <= 1000 and y <=1000

// Return an array list - [Heads, Legs]

// If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases).

// However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;

  if (legs & 1 || chickens > heads || cows > heads)
    return "No solutions";
  else
    return [chickens, cows];
}

animals(6, 24);

// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Best Practice

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid.
// Write a function to help Bob with this calculation.

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();

Kata.getVolumeOfCuboid(1,2,3);
