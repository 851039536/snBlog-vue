module.exports = {
  // 只作用于当前目录
  root: true,
  // 当前项目支持的运行环境，从而可以使用当前环境下相关的全局变量
  env: {
    // 支持 NodeJs 环境，可以使用 Node 环境下的全局变量。比如 process、global、require 等等
    node: true,
    //持浏览器环境，表示支持浏览器环境下的相关全局变量。比如 window、document 等等
    browser: true,
    //启用除了 modules 以外的所有 ECMAScript 特性
    es2022: true
  },
  // 扩展配置
  extends: [
    'eslint:recommended',
    'vue-global-api',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended', // 让 eslint 识别 vue 文件
    'plugin:prettier/recommended',
    'prettier', // eslint-config-prettier 的缩写
    '@unocss'
  ],

  // 解析器选项
  parser: 'vue-eslint-parser',
  // 插件
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 10, // 指定 EsLint 支持 ECMAScript 6 的语法检测
    parser: '@typescript-eslint/parser',
    sourceType: 'module', // 设置为 "script" (默认)或"module"（如果你的代码是 ECMAScript 模块)
    ecmaFeature: {
      // 想使用额外的语言特性
      jsx: true, // 启用jsx
      globalReturn: true, // 在全局作用域下使用return语句
      impliedStrict: true, // 启用全局strict mode
      experimentalObjectRestSpread: false
      // 启用实验性的object rest/spread properties支持
      // (不建议开启)
    }
  },

  // 启用规则
  rules: {
    // 开启 prettier 自动修复的功能
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0, // 要求组件名称始终为多字
    'vue/no-dupe-v-else-if': 1, // 不允许 /链中的重复条件
    'vue/no-async-in-computed-properties': 1, // 不允许计算属性中的异步操作
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ], // 禁止重复属性
    // 强制校验 v-bind 指令
    'vue/valid-v-bind': 'error',
    // 强制校验 v-cloak 指令
    'vue/valid-v-cloak': 'error',
    // 强制校验 v-else-if 指令
    'vue/valid-v-else-if': 'error',
    // 强制校验 v-else 指令
    'vue/valid-v-else': 'error',
    // 强制校验 v-for 指令
    'vue/valid-v-for': 'error',
    // 强制校验 v-html 指令
    'vue/valid-v-html': 'error',
    // 强制校验 v-if 指令
    'vue/valid-v-if': 'error',
    // 强制校验 v-model 指令
    'vue/valid-v-model': 'error',
    // 强制校验 v-on 指令
    'vue/valid-v-on': 'error',
    // 强制校验 v-once 指令
    'vue/valid-v-once': 'error',
    // 强制校验 v-pre 指令
    'vue/valid-v-pre': 'error',
    // 强制校验 v-show 指令
    'vue/valid-v-show': 'error',
    // 强制校验 v-text 指令
    'vue/valid-v-text': 'error',
    'vue/comment-directive': 0,
    // 强制校验 template 根节点
    'vue/valid-template-root': 'error',
    'vue/script-setup-uses-vars': 'error', // setup 语法糖校验
    'vue/no-export-in-script-setup': 1, // 禁止export<script setup>
    'vue/no-dupe-keys': 2, // 此规则可防止使用重复的名称
    'vue/no-unused-vars': 2, // 禁止 v-for 指令或作用域属性的未使用变量定义
    '@typescript-eslint/brace-style': 1, // 强制块的一致大括号样式
    '@typescript-eslint/default-param-last': 2, // 将默认参数强制放在最后
    '@typescript-eslint/array-type': 1, // 需要对数组使用 或T[]Array<T>
    '@typescript-eslint/ban-tslint-comment': 2, // 禁止使用// tslint:<rule-flag>
    '@typescript-eslint/no-empty-interface': 2, // 禁止声明空接口
    '@typescript-eslint/no-extra-non-null-assertion': 1, // 不允许额外的非空断言
    '@typescript-eslint/no-for-in-array': 1, // 禁止使用 for-in 循环迭代数组
    '@typescript-eslint/no-inferrable-types': 1, // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-misused-new': 1, // 强制执行 和 的有效定义newconstructor
    '@typescript-eslint/no-namespace': 1, // 禁止使用自定义 TypeScript 模块和命名空间
    '@typescript-eslint/no-non-null-asserted-optional-chain': 1, // 不允许在可选链表达式之后使用非空断言
    '@typescript-eslint/no-non-null-assertion': 1, // 不允许使用后缀运算符进行非空断言!
    '@typescript-eslint/no-this-alias': 1, // 禁止混叠this
    '@typescript-eslint/prefer-as-const': 1, // 优先使用文本类型as const
    '@typescript-eslint/prefer-namespace-keyword': 1, // 要求使用关键字而不是关键字来声明自定义 TypeScript 模块namespacemodule
    '@typescript-eslint/triple-slash-reference': 1, // 设置三斜杠指令与 ES6 样式导入声明的首选项级别
    '@typescript-eslint/no-array-constructor': 1, // 禁止泛型构造函数Array
    '@typescript-eslint/no-empty-function': 1, // 禁止空函数

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error', // 禁止丢失精度的文字数字

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn', // 禁止未使用的变量

    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'no-return-await': 2, // 在 async function， return await 很少有用。因为 async function 的返回值总是封装在 Promise.resolve，return await 实际上并没有做任何事情，只是在 Promise resolve 或 reject 之前增加了额外的时间。唯一有效是，如果 try/catch 语句中使用 return await 来捕获另一个基于 Promise 的函数的错误，则会出现异常。
    'no-redeclare': 2, // 禁止重新声明变量
    'require-await': 1, // 禁止使用不带 await 表达式的 async 函数
    'arrow-body-style': ['error', 'always'], // 要求箭头函数体使用大括号
    'arrow-spacing': ['error', { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
    'generator-star-spacing': ['error', { before: true, after: true }], // 强制 generator 函数中 * 号周围有空格
    'prefer-template': 1, // 建议使用模板字面量而非字符串连接
    'no-delete-var': 2, // 禁止删除变量
    'no-useless-return': 1, // 禁止多余的 return 语句
    'no-useless-concat': 1, // 禁止没有必要的字符拼接
    'no-self-compare': 1, // 禁止自身比较
    'no-multi-str': 2, // 禁止多行字符串
    'no-extra-label': 2, // 禁用不必要的标签
    'no-floating-decimal': 2, // 禁止浮点小数
    'no-fallthrough': 2, // 禁止 case 语句落空
    'no-eq-null': 2, // 禁止与 null 进行比较
    'no-empty-function': 0, // 禁止出现空函数
    'no-empty-pattern': 1, // 禁止使用空解构模式
    'no-else-return': ['error', { allowElseIf: false }], // 禁止在 else 前有 return  true允许在 return 之后有 else if 块
    'no-alert': 1, // 禁用 Alert
    'no-case-declarations': 2, // 禁止在 case 或 default 子句中出现词法声明
    'max-classes-per-file': 2, // 强制每个文件中包含的的类的最大数量
    'guard-for-in': 1, // 需要约束 for-in
    complexity: ['error', 19], // 限制圈复杂度
    eqeqeq: ['error', 'always'], // 选项 "always"（默认）强制在任何情况下都使用 === 和 !==  smart 除了 比较两个字面量的值,比较 typeof 的值 与 null 进行比较 强制使用 === 和 !==
    'dot-notation': ['error', { allowKeywords: true }], // 要求使用点号
    'default-case': 1, // 要求 Switch 语句中有 Default 分支
    'dot-location': ['error', 'property'], // 强制在点号之前或之后换行 object要求点操作符和对象部分放在同一行 property要求点操作符和属性放在同一行。
    'use-isnan': 2, // 要求调用 isNaN()检查 NaN
    'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
    'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-ex-assign': 2, // 禁止对 catch 子句中的异常重新赋值
    'no-dupe-keys': 2, // 禁止在对象字面量中出现重复的键
    'no-debugger': 2, // 该规则禁止 debugger 语句。
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式
    'no-compare-neg-zero': 2, // 禁止与 -0 进行比较
    'no-async-promise-executor': 2, // 禁止使用异步函数作为 Promise executor 如果你的代码库不支持异步函数语法，则不需要启用此规则。
    'no-useless-escape': 0, // 禁止不必要的转义字符
    'no-var': 'error', // 不能使用var声明变量
    // 'prettier/prettier': 'off', //关闭prettier的提示,
    'no-cond-assign': 2, // 条件语句的条件中不允许出现赋值运算符
    'no-dupe-args': 2, // 函数参数不能重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-const-assign': 2, // 禁止修改const声明的变量
    'for-direction': 2 // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
  },
  // 全局变量
  globals: {
    defineProps: true,
    defineEmits: true,
    useRoute: true,
    useRouter: true,
    axios: true
  }
}
