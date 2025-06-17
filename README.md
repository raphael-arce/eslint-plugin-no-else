# eslint-plugin-no-else

An ESLint plugin that forbids `else` blocks and encourages early returns for cleaner, more readable code.

## Installation

There is no NPM package yet.

## Rule Details

This rule aims to improve code readability by eliminating `else` blocks. Instead of using `else`, use early returns. This makes the code flow more linear and easier to follow.

Example of **incorrect** code for this rule:

```javascript
function getSign(x) {
    if (x > 0) {
      return '+';
    } else if (x < 0) {
      return '-';
    } else {
      return '';
    }
}
```

Example of **correct** code for this rule:

```javascript
function getSign(x) {
  if (x > 0) {
    return '+';
  }

  if (x < 0) {
    return '-';
  }

  return '';
}
```
