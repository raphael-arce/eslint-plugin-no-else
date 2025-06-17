/**
 * Example for incorrect code (uses `else if` and `else`)
 */
function foo() {
  const random = Math.random();

  if (random > 0.75) {
    console.log("Random number is greater than 0.75");
  } else if (random > 0.5) {
    console.log("Random number is greater than 0.5");
  } else {
    console.log("Random number is less than or equal to 0.5");
  }
}

/**
 * Example for correct code (only uses `if` with return)
 */
function bar() {
  const random = Math.random();

  if (random > 0.75) {
    console.log("Random number is greater than 0.75");
    return;
  }

  if (random > 0.5) {
    console.log("Random number is greater than 0.5");
    return;
  }

  console.log("Random number is less than or equal to 0.5");
}

foo();
bar();
