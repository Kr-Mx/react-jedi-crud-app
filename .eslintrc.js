module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": [2, "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "linebreak-style": ["error", "windows"],
    "import/prefer-default-export": "off",
    "react/prop-types": 0
  },
};
