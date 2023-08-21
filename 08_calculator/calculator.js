const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	const sum = arr.reduce((accumulator,currentVal)=>currentVal+accumulator,0)
  return sum
};

const multiply = function(arr) {
  const product = arr.reduce((accumulator, currentVal)=>accumulator*currentVal)
  return product
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  // let result = 1
  // for (let i = 1; i<=num; i++)
  // {
  //   result *= i
  // }
  // return result
	// const fact = [...num].reduce((accumulator,currentVal)=>currentVal)
  if (num === 0) return 1
  return num * factorial(num-1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
