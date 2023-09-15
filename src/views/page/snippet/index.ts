export function useIndex() {
  const refScroll = ref()
  const onScroll = (type: any) => {
    //下一次 DOM 更新周期时再执行
    nextTick(() => {
      //根据 type 参数的值计算出要滚动到的位置  确保在模板中将其赋值给对应的 DOM 元素，如 <div ref="snippetRef"></div>。
      refScroll.value.scrollTop = type === 'top' ? 0 : refScroll.value.scrollHeight
    })
  }
  return { onScroll, refScroll }
}
