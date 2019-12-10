module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["prettier", "prettier/react", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parse: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extension: [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off",
    "no-param-ressing": "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "erro",
    "react-hooks/exhaustive-deps": "warn"
  }
};
