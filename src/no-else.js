/**
 * @fileoverview Rule to flag `else` blocks
 * @author Raphael Arce
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('../types').Rule.RuleModule} */
export default {
  meta: {
    type: "suggestion",

    docs: {
      description: "Disallow `else` blocks",
      recommended: false,
      frozen: true,
      url: "https://eslint.org/docs/latest/rules/no-else",
    },

    schema: [],

    fixable: null,

    messages: {
      unexpected: "Avoid using `else` blocks, prefer early returns",
    },
  },

  create(context) {
    //--------------------------------------------------------------------------
    // Public API
    //--------------------------------------------------------------------------

    return {
      IfStatement(node) {
        if (node.alternate) {
          context.report({
            node: node.alternate,
            messageId: "unexpected",
          });
        }
      },
    };
  },
};
