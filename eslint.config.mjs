import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintNoElse from "./src/plugin.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, custom: eslintNoElse },
    extends: ["js/recommended"],
    rules: {
      "custom/no-else": "error",
    },
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
]);
