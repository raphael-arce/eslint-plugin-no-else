import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintNoElse from "./src/index.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,md}"],
    plugins: { js, "no-else": eslintNoElse },
    extends: ["js/recommended"],
    rules: {
      "no-else/no-else": "error",
    },
  },
  { files: ["**/*.{js,mjs,cjs,md}"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
]);
