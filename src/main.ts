import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
// import 'virtual:windi.css'
// 导入Unocss样式
import 'uno.css'

// 引入全局自定义指令
import directive from '@/utils/common/directive'

import lazyPlugin from 'vue3-lazy'
import infiniteScroll from 'vue3-infinite-scroll-better'
// v-md
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

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
import App from './App.vue'
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css'
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index'
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'
//  end v-md

import router from './router/index'
// import store from './store/index'

// hljs.registerLanguage('csharp', csharp)
// hljs.registerLanguage('css', css)
// hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('typescript', typescript)
// hljs.registerLanguage('scss', scss)

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
// use
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
app.use(router)
app.use(directive)
app.mount('#app')
