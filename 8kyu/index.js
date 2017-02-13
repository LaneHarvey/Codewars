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

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// Sum of positive Best Practice uses reduce

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
