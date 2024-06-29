const add = function(num_one, num_two) {
  let result;
  result = num_one + num_two;
  return result;
};

const subtract = function(num_one, num_two) {
  let result;
  result = num_one - num_two;
  return result;
};

const sum = function(arr) {
	const result = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return result;
};

const power = function(num_one, num_two) {
	const result = Math.pow(num_one, num_two);
  return result;
};

const factorial = function(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
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
