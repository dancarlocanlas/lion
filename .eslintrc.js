module.exports = {
  extends: ['@open-wc/eslint-config', 'eslint-config-prettier'].map(require.resolve),
  overrides: [
    {
      files: [
        '**/test-suites/**/*.js',
        '**/test/**/*.js',
        '**/test-node/**/*.js',
        '**/stories/**/*.js',
        '**/*.config.js',
      ],
      rules: {
        'no-console': 'off',
        'no-unused-expressions': 'off',
        'class-methods-use-this': 'off',
        'max-classes-per-file': 'off',
        'import/no-extraneous-dependencies': 'off', // we moved all devDependencies to root
      },
    },
    {
      files: ['demo/**/*.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
