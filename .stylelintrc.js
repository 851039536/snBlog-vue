module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-rational-order'],
  overrides: [
    // 扫描.vue/html文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  // 覆盖配置（优先级大于config-standard）
  rules: {
    //配置空格数
    indentation: 2,

    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['/^my-/', 'custom', 'include', 'mixin', 'if', 'screen']
      }
    ],
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': null,
    'scss/operator-no-unspaced': null,
    'no-descending-specificity': null,
    // 'at-rule-name-case': 'lower', // 指定@规则名的大小写,
    // 'shorthand-property-no-redundant-values': true, // 简写属性
    'declaration-block-trailing-semicolon': null
    // 'no-descending-specificity': null
  }
}
