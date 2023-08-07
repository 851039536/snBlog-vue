import { message } from 'ant-design-vue'

//键盘事件
export function useEventKey() {
  function KeydownCtrl_z(e: any) {
    if (e.ctrlKey && e.keyCode === 90) {
      message.info('触发Ctrl+z')
    }
  }

  /**
   * @description: 添加ctrl_z组合事件
   */
  function addKeydownCtrl_z() {
    document.addEventListener('keydown', KeydownCtrl_z, false)
  }

  /**
   * 清除事件
   */
  function removeKeydownCtrl_z() {
    document.removeEventListener('keydown', KeydownCtrl_z)
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
    addKeydownCtrl_z()
  })
  onUnmounted(() => {
    return removeKeydownCtrl_z()
  })
  return { addKeydownCtrl_z, removeKeydownCtrl_z, addKeyup, removeKeyup }
}
