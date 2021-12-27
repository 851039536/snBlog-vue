module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'plugin:prettier/recommended', 'vue-global-api'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-v-model-argument': 'off',
    'no-restricted-syntax': 0,
    // 'no-unused-vars': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state' // for vuex state,
        ]
      }
    ]
  },
  globals: {
    defineProps: true,
    defineEmits: true,
    // onMounted: true,
    // reactive: true,
    // defineAsyncComponent: true,
    useRoute: true,
    useRouter: true,
    axios: true
    // ref: true,
    // getCurrentInstance: true,
    // onBeforeUpdate: true,
    // inject: true,
    // nextTick: true,
    // provide: true
  }
}
