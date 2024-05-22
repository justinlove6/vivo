module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order'
  ],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global', 'export', 'v-deep', 'deep'] }
    ],
    'selector-class-pattern': null,
    'color-function-notation': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'scss/at-rule-no-unknown': null
  }
}
