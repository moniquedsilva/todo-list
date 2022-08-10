module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    'plugin:vuejs-accessibility/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-named-as-default': 0,
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'space-before-function-paren': [
      2,
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ]
  }
}
