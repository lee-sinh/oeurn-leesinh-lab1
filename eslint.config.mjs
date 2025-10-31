import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 🔹 Main app files (Node environment)
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node, // ✅ Node environment
    },
  },

  // 🔹 Test files (Mocha environment)
  {
    files: ["test/**/*.js"], // adjust if your tests are elsewhere
    languageOptions: {
      globals: {
        ...globals.node,   // Node globals
        ...globals.mocha,  // ✅ Mocha test globals (describe, it, etc.)
      },
    },
  },
]);
