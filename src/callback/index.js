// Callback example
function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// setTimeout example 1
setTimeout(function () {
  console.log("Hi JavaScript!");
}, 2000);

// setTimeout example 1
function greeting(name) {
  console.log(`Hi ${name}`);
}

setTimeout(greeting, 2000, "Tatán");
