import pinia from '@store/index'

import { useUiSetStore } from '@/store/modules/uiSettings'
import { message } from 'ant-design-vue'
const ui = useUiSetStore(pinia)

//键盘事件
export function useEventKey() {
  const removeEscape = (e: any) => {
    if (e.key === 'Escape') {
      removeKeyup(removeEscape)
      ui.searchArticle = false
    }
  }
  function keydownCtrl(e: any) {
    console.log('[ e ]-6', e)
    if (e.ctrlKey && e.keyCode === 90) {
      message.info('触发Ctrl+z')
    }

    if (e.ctrlKey && e.keyCode === 70) {
      // 阻止默认回车键行为
      e.preventDefault()
      message.info('触发Ctrl+f')
      ui.searchArticle = true
      addKeyup(removeEscape)
    }

    //判断触发ctrl+k
    if (e.ctrlKey && e.keyCode === 75) {
      // 阻止默认回车键行为
      e.preventDefault()
      message.info('触发Ctrl+k')
    }
  }

  /**
   * @description: 添加ctrl组合事件
   */
  function addKeydownCtrl() {
    document.addEventListener('keydown', keydownCtrl, false)
  }

  /**
   * 清除事件
   */
  function removeKeydownCtrl() {
    document.removeEventListener('keydown', keydownCtrl)
  }

  /**
   * @description: 添加keyup事件
   * @param {any} funs
   */
  const addKeyup = (funs: any) => {
    window.addEventListener('keyup', funs)
  }
  /**
   * @description: 删除keyup事件
   * @param {any} funs
   */
  const removeKeyup = (funs: any) => {
    window.removeEventListener('keyup', funs)
  }

  //一个组合式函数也可以挂靠在所属组件的生命周期上
  onMounted(() => {
    // 注册全局的键盘事件监听器
    // addKeydownCtrl_z()
  })
  onUnmounted(() => {
    // return removeKeydownCtrl_z()
  })
  return { addKeydownCtrl, removeKeydownCtrl, addKeyup, removeKeyup }
}
