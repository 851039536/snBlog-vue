import { createApp } from 'vue'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'md-editor-v3/lib/preview.css'

import 'uno.css'

import router from './router/index'
import directive from '@/hooks/directive/directive' // 引入全局自定义指令
import lazyPlugin from 'vue3-lazy'
import infiniteScroll from 'vue3-infinite-scroll-better'
import VueDOMPurifyHTML from 'vue-dompurify-html' //指令的“安全”替代品。该 HTML 代码是 在解释之前用 DOMPurify 进行消毒。v-html

import store from '@/store'
import App from './App.vue'
const app = createApp(App)
app.use(store)
function getImageUrl(name: string) {
  return new URL(`/src/assets/img/blog/${name}`, import.meta.url).href
}
app.use(lazyPlugin, {
  loading: getImageUrl('1.jpg'),
  error: getImageUrl('2.jpg')
})
app.use(infiniteScroll)
app.use(VueDOMPurifyHTML)
app.use(router)
app.use(directive)
app.mount('#app')
