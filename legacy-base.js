module.exports = {
  extends: [
    './rules/base-rules/best-practices',
    './rules/base-rules/errors',
    './rules/base-rules/node',
    './rules/base-rules/style',
    './rules/base-rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'prefer-numeric-literals': 'off',
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
    'no-var': 'off',
    'prefer-object-spread': 'off',
    strict: ['error', 'safe'],
  }
};
