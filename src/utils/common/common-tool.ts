// import moment from 'moment'
import dayjs from 'dayjs'
/**
 * 常用工具类
 */
class Tool {
  /**
   * 回到顶部
   */
  static backTop() {
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
  static momentTime(time: Date) {
    dayjs(time).format('YYYY-MM-DD- H:mm:ss')
  }

  /**
   *  日期格式化
   * @param time
   */
  static async momentTimeList(time: any) {
    await time.data.forEach((res: any) => {
      res.timeCreate = dayjs(res.timeCreate).format('YYYY-MM-DD-H:mm:ss')
      res.timeModified = dayjs(res.timeModified).format('YYYY-MM-DD-H:mm:ss')
    })
  }
}

export { Tool }
