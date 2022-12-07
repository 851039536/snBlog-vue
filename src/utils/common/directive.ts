import { App, DirectiveBinding } from 'vue'

// eslint-disable-next-line no-undef
let debounceTimer: NodeJS.Timeout | null, throttleTimer: NodeJS.Timeout | null

export default (app: App<Element>) => {
  // 防抖
  app.directive('debounce', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      const eventType: string = Object.keys(binding.modifiers)[0] || 'click'

      el.addEventListener(eventType, () => {
        const dealy: number = binding.arg ? parseInt(binding.arg) : 300
        const fn: unknown = binding.value

        if (isNaN(dealy)) {
          throw Error('v-debounce:arg必须为数字!')
        }

        if (typeof fn !== 'function') {
          throw Error('v-debounce绑定值必须为函数!')
        }

        if (debounceTimer) {
          clearTimeout(debounceTimer)
        }

        debounceTimer = setTimeout(() => {
          fn()
        }, dealy)
      })
    }
  })
  // 节流
  app.directive('throttle', {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      const eventType: string = Object.keys(binding.modifiers)[0] || 'click'

      el.addEventListener(eventType, () => {
        const dealy: number = binding.arg ? parseInt(binding.arg) : 300
        const fn: unknown = binding.value

        if (isNaN(dealy)) {
          throw Error('v-throttle:arg必须为数字!')
        }

        if (typeof fn !== 'function') {
          throw Error('v-throttle绑定值必须为函数!')
        }

        if (throttleTimer) {
          return
        }

        throttleTimer = setTimeout(() => {
          fn()
          throttleTimer = null
        }, dealy)
      })
    }
  })

  //自动聚焦
  app.directive('focus', {
    mounted(el) {
      el.focus()
    }
  })

  app.directive('hide', {
    mounted(el, binding) {
      el.handler = function (e: { target: any }) {
        // 如果点击范围在绑定的元素范围内，那么将不执行指令操作，而是执行原点击事件
        if (el.contains(e.target)) return
        if (typeof binding.value.fn === 'function') {
          // 绑定给指令的如果是一个函数，那么将回调并指定this
          binding.value.fn.apply(this, arguments) // 并不推荐使用style的方式来隐藏元素，这样的话控制弹窗的变量就无法改变，所以推荐使用回调函数 // el.style.display = 'none'; // 解除事件绑定
          document.removeEventListener('click', el.handler)
        }
      } // 监听全局的点击事件
      document.addEventListener('click', el.handler) // 如果同步绑定全局事件不生效，可以采用异步的方式 // setTimeout(() => { // document.addEventListener('click', el.handler) // }, 0);
    },
    // 解除事件绑定
    beforeMount(el) {
      document.removeEventListener('click', el.handler)
    }
  })
}
