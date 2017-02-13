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

positiveSum([1,3,5,6,-8,2])

// Best Practice

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
