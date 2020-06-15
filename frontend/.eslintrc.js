const path = require('path');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "react-app"
  ],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
    ecmaVersion: 2020,
  },
  rules: {
    indent: ['error', 2],
    curly: 'off',
    'max-len': [
      'error', 100, 2, {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],
  },
  ignorePatterns: ['./node_modules'],
};
