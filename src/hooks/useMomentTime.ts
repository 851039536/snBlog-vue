import dayjs from 'dayjs'

export function useMomentTime() {
  /**
   * 日期格式化
   * @param time
   */
  function momentTime(time: Date) {
    dayjs(time).format('YYYY-MM-DD- H:mm:ss')
  }

  /**
   *  日期格式化
   * @param time
   */
  async function momentTimeList(time: any) {
    await time.data.forEach((res: any) => {
      res.timeCreate = dayjs(res.timeCreate).format('YYYY-MM-DD-H:mm:ss')
      res.timeModified = dayjs(res.timeModified).format('YYYY-MM-DD-H:mm:ss')
    })
  }
  return { momentTime, momentTimeList }
}
