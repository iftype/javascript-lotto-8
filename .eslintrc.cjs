module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ['package*', '.npmrc', '*.md', '.*', '__tests__'],
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['acc', 'e'] }],
    'class-methods-use-this': 'off',
    'no-console': 'warn',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
  },
};
