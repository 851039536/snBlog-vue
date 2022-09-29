module.exports = {
  printWidth: 120, //单行长度,超过则自动换行
  // 设置tab宽度为2个空格
  tabWidth: 2,
  // 语句末尾要加分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 always始终包含
  arrowParens: 'avoid',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  endOfLine: 'auto', //避免报错delete (cr)的错 维护现有的行尾（通过查看第一行之后使用的内容，对一个文件中的混合值进行规范化）
  trailingComma: 'none', // 是否使用尾逗号,
  bracketSameLine: true, //将多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素）
  vueIndentScriptAndStyle: false, //是否缩进 Vue 文件中的代码<script>和<style>标签
  htmlWhitespaceSensitivity: 'ignore'
  // eslintIntegration: false //不让prettier使用eslint的代码格式进行校验
  // disableLanguages: ['vue'] // 不格式化vue文件，vue文件的格式化单独设置
}
