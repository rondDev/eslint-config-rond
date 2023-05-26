module.exports = {
  extends: [
    './rules/react',
    './rules/react-a11y',
    './rules/base-rules/best-practices',
    './rules/base-rules/errors',
    './rules/base-rules/node',
    './rules/base-rules/style',
    './rules/base-rules/variables',
    './rules/base-rules/es6',
    './rules/base-rules/imports',
    './rules/base-rules/strict',
  ].map(require.resolve),
  rules: {}
};
