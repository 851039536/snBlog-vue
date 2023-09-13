export function useDirective() {
  /**
   * @description: 防抖
   * @param {any} fn 需要频繁调用的方法
   * @param {number} delay 间隔时间，表示多长时间没有操作则执行fn方法, delay单位是秒
   */
  function debounce(fn: any, delay: number): any {
    let timer: any
    return function () {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
  }

  /**
   * 节流
   * @param fn 需要频繁调用的方法
   * @param delay 间隔时间，表示多长时间没有操作则执行fn方法, delay单位是秒
   */
  function throttle(fn: any, delay: number) {
    const isThrottle = ref(true)
    return () => {
      if (!isThrottle.value) return
      isThrottle.value = false
      setTimeout(() => {
        fn()
        isThrottle.value = true
      }, delay)
    }
  }

  return {
    debounce,
    throttle
  }
}
