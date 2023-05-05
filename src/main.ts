import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'uno.css' // 导入Unocss样式
import router from './router/index'
import directive from '@/hooks/directive/directive' // 引入全局自定义指令
import lazyPlugin from 'vue3-lazy'
import infiniteScroll from 'vue3-infinite-scroll-better'
// v-md
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import VueDOMPurifyHTML from 'vue-dompurify-html' //指令的“安全”替代品。该 HTML 代码是 在解释之前用 DOMPurify 进行消毒。v-html

// 按需引入语言包
// import hljs from 'highlight.js/lib/core'
// import csharp from 'highlight.js/lib/languages/csharp'
// import css from 'highlight.js/lib/languages/css'
// import javascript from 'highlight.js/lib/languages/javascript'
// import typescript from 'highlight.js/lib/languages/typescript'
// import scss from 'highlight.js/lib/languages/scss'
// 引入所有语言包
import hljs from 'highlight.js'

// 显示代码行数
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index'
// 快速复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index'

import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs
})
VueMarkdownEditor.use(createLineNumbertPlugin())
VueMarkdownEditor.use(createCopyCodePlugin())
VMdPreview.use(githubTheme, {
  Hljs: hljs
})
VMdPreview.use(createLineNumbertPlugin())
VMdPreview.use(createCopyCodePlugin())

VueMarkdownEditor.use(createEmojiPlugin())

//  end v-md

// use
import App from './App.vue'
const app = createApp(App)

function getImageUrl(name: string) {
  return new URL(`/src/assets/img/blog/${name}`, import.meta.url).href
}

// app.config.globalProperties.day = dayjs //全局挂载
const pinia = createPinia()
app.use(pinia)

app.use(lazyPlugin, {
  loading: getImageUrl('2.jpg'),
  error: getImageUrl('1.jpg')
})
app.use(VueMarkdownEditor)
app.use(VMdPreview)
app.use(infiniteScroll)
app.use(VueDOMPurifyHTML)
app.use(router)
app.use(directive)
app.mount('#app')
