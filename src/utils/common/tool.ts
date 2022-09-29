import moment from 'moment'

/**
 * 常用工具类
 */
class tool {
  /**
   * 回到顶部
   */
  static BackTop() {
    const timer = setInterval(() => {
      const osTop = document.documentElement.scrollTop || document.body.scrollTop
      const isPeed = Math.floor(-osTop / 5)
      document.body.scrollTop = osTop + isPeed
      document.documentElement.scrollTop = document.body.scrollTop
      if (osTop === 0) {
        clearInterval(timer)
      }
    }, 30)
  }

  /**
   * 日期格式化
   * @param time
   */
  static MomentTime(time: Date) {
    moment(time).format('YYYY-MM-DD- H:mm:ss')
  }

  /**
   *  日期格式化
   * @param time
   */
  static async MomentTimeList(time: any) {
    await time.data.forEach((res: any) => {
      res.timeCreate = moment(res.timeCreate).format('YYYY-MM-DD- H:mm:ss')
      res.timeModified = moment(res.timeModified).format('YYYY-MM-DD- H:mm:ss')
    })
  }

  /**
   * 随机数
   * @param minNum 最小值
   * @param maxNum 最大值
   * @param counts 循环次数
   * @returns
   */
  static Random(minNum: number, maxNum: number, counts: number) {
    let i = 0
    let count
    do {
      i += 1
      const res = `${Math.random() * (maxNum - minNum + 1) + minNum}`
      count = parseInt(res, 10)
    } while (i < counts)
    return count
  }
}

export { tool }
