//you can copy paste the following code in your console to test it!!!

var colorsStr = "red,green,blue";

// Transforming a string to an Array
var colArr = colorsStr.split(',');
console.log(colArr);

//output ===> ["red", "green", "blue"]

// Note that you can easily change the elements of the Array at a specific index
colArr[1] = "yellow";
console.log(colArr);

//output ===> ["red", "yellow", "blue"]

// You can also add elements at a specific index, also leaving an empty index to fill in... later maybe? 
colArr[4] = 'brown';
console.log(colArr);

//output ===> ["red", "yellow", "blue", empty, "brown"]

//also you can add multiple elements with splice!!! (Even a boolean or a number!!!)
colArr.splice(5, 0, "green", "orange", false, "spicy", 23, 213, "adding more", true, "last one");
console.log(colArr);

//output ===> ["red", "yellow", "blue", empty, "brown", "green", "orange", false, "spicy", 23, 213, "adding more", true, "last one"]

//also grabing one element inside an element in an array
colArr[5][4];

//output ===> "n"

//It's cool to learn the Methods (push, pop, shift, unshift, split, and splice...) but this index thing... I like it!!! 

//Make friends first, make sales second, make love third. In no particular order.
//— Michael Scott
