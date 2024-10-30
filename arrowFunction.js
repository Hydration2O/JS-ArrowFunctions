// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
let greet = (name) => `Hello, ${name}`;
console.log(`${greet("m7md")}`);

// Write a simple arrow function that takes two parameters and returns their sum.
let add2 = (a, b) => a + b;
console.log(`${add2(3, 7)}`);

// Write a simple arrow function that squares a number.
let exp2 = (a) => a ** 2;
console.log(`${exp2(3)}`);

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
let mapExp2 = (array) => {
//    let result=[...array];
   let result = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[i]=array[i]**2;
  };
  return result;
};
let bob= [1,2,3];
console.log(`${mapExp2(bob)}`);
