module.exports = {
  extends: [
    'alloy/react', //react项目需要
    'alloy/typescript', //ts项目需要
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
};
