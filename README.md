# eslint-plugin-no-else

An ESLint plugin that forbids `else` blocks and encourages early returns for cleaner, more readable code.

## Installation

There is no NPM package yet.

## Rule Details

This rule aims to improve code readability by eliminating `else` blocks. Instead of using `else`, you should use early returns, which can make the code flow more linear and easier to follow.

Examples of **incorrect** code for this rule:

```javascript
function example(x) {
    if (x >= 0) {
        return 'positive';
    } else {
        return 'negative';
    }
}

function anotherExample(x) {
    if (x > 0) {
        console.log('positive');
    } else if (x < 0) {
        console.log('negative');
    } else {
        console.log('zero');
    }
}
```

Examples of **correct** code for this rule:

```javascript
function example(x) {
    if (x >= 0) {
        return 'positive';
    }
    return 'negative';
}

function anotherExample(x) {
    if (x > 0) {
        console.log('positive');
        return;
    }

    if (x < 0) {
        console.log('negative');
        return;
    }

    console.log('zero');
}
```
