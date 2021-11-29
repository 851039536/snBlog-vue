/*
 * @Author: 防抖
 * @Date: 2021-09-22 14:42:57
 * @LastEditTime: 2021-11-11 09:19:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\utils\dethrottle.ts
 */

import { ref } from 'vue'

/**
 * @description: 防抖
 * @param {any} fn
 * @param {number}  delay
 * @return {*}
 */
function debounce(fn: any, delay: number) {
  let timer: any
  return function res() {
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
 * @param fn
 * @param delay
 * @returns
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

export { debounce, throttle }
