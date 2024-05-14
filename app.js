// Exercise 1.1 Create function
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

// Exercise 1.2 Create Function Inform---
function inform(firstName, location, hobby) {
  console.log(
    "Hi, my name is " +
      firstName +
      ". I live in " +
      location +
      " and enjoy " +
      hobby +
      "."
  );
}
inform("Monton", "Nakhonsawan", "playing games");
