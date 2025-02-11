require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,

  env: {
    node: true,
    webextensions: true,
    mocha: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },

  overrides: [
    {
      files: ['**/tests/**/*.[jt]s?(x)'],
      env: {
        jest: true
      }
    },
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ],

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier','@vue/eslint-config-prettier']
}
