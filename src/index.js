/**
 * @fileoverview Main package entrypoint.
 * @author Raphael Arce
 */

"use strict";

import noElseRule from "./no-else.js";
import packageJson from "../package.json" with { type: "json" };
const { name, version } = packageJson;

const plugin = {
  meta: {
    name,
    version,
  },
  rules: {
    "no-else": noElseRule,
  },
};

export default plugin;
