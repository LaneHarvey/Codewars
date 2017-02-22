// Area of an arrow

// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

// a and b are integers and > 0

// Write a function arrowArea, which returns the area of the arrow, rounded to two decimal places.

function arrowArea(a,b) {
    return +((a * b) / 4).toFixed(2);
}
arrowArea(7,6);

// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
accum("RqaEzty");

// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello.

// Return null/nil if input is empty string or null/nil.

function greet(name) {
  return name ? 'hello ' + name + '!' : null;
}
