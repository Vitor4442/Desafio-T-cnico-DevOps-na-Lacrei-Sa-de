const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Reconhece require, module, process, console, etc.
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];