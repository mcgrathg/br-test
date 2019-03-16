const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier', 'prettier/react', 'plugin:import/recommended'],
  plugins: ['prettier', 'react', 'jsx-a11y', 'filenames', 'react-hooks'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'jsx-a11y/label-has-for': 0, // deprecated & buggy rule, but still being enforced by default in v6.1.0
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        labelComponents: ['Label'],
        controlComponents: ['Field', 'Input', 'TextInput', 'LocaleToggle'],
      },
    ],
    'prefer-template': 2,
    'react/sort-comp': 2,
    'import/newline-after-import': 2,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': 2,
    'filenames/match-regex': [2, '^(-|[a-z0-9]|.)+$'], // kebab case
  },
  settings: {
    react: {
      version: '16.6',
    },
  },
};
