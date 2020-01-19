module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  "plugins": [
    "react",
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    "react/state-in-constructor": 0,
    "react/prefer-stateless-function": 0
  }
};
