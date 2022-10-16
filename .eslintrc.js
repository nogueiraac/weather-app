module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:jsx-a11y/strict',
    'plugin:styled-components-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
    'styled-components-a11y',
  ],
  rules: {
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      0,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'linebreak-style': 0,
    'react/jsx-props-no-spreading': 1,
  },
};
