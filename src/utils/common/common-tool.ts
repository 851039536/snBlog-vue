// // import moment from 'moment'
// import dayjs from 'dayjs'
// /**
//  * 常用工具类
//  */
// class Tool {
//   /**
//    * 日期格式化
//    * @param time
//    */
//   static momentTime(time: Date) {
//     dayjs(time).format('YYYY-MM-DD- H:mm:ss')
//   }

//   /**
//    *  日期格式化
//    * @param time
//    */
//   static async momentTimeList(time: any) {
//     await time.data.forEach((res: any) => {
//       res.timeCreate = dayjs(res.timeCreate).format('YYYY-MM-DD-H:mm:ss')
//       res.timeModified = dayjs(res.timeModified).format('YYYY-MM-DD-H:mm:ss')
//     })
//   }
// }

// export { Tool }
