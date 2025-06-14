import { RuleTester } from "eslint";
import noElseRule from "./no-else.js";

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  languageOptions: { ecmaVersion: 2015 },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "no-else", // rule name
  noElseRule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        code: `
        function foo() {
          const random = Math.random();

          if (random > 0.5) {
            console.log("Random number is greater than 0.5");
            return;
          }

          console.log("Random number is less than or equal to 0.5");
        }
        `,
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: `
        function foo() {
          const random = Math.random();

          if (random > 0.5) {
            console.log("Random number is greater than 0.5");
          } else {
            console.log("Random number is less than or equal to 0.5");
          }
        }`,
        errors: 1,
      },
    ],
  },
);

console.log("All tests passed!");
