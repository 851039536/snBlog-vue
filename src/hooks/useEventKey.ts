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

  const addKeyup = (funs: any) => {
    window.addEventListener('keyup', funs)
  }

  const removeKeyup = (funs: any) => {
    window.removeEventListener('keyup', funs)
  }

  return { addKeydownCtrl_z, removeKeydownCtrl_z, addKeyup, removeKeyup }
}
