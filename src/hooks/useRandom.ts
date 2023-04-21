function useRandom() {
  /**
   * 随机数
   * @param minNum 最小值
   * @param maxNum 最大值
   * @param counts 循环次数
   * @returns
   */
  function random(minNum: number, maxNum: number, counts: number) {
    let i = 0
    let count
    do {
      i += 1
      const res = `${Math.random() * (maxNum - minNum + 1) + minNum}`
      count = parseInt(res, 10)
    } while (i < counts)
    return count
  }

  return {
    random
  }
}

export default useRandom
