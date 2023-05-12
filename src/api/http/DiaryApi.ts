import { get, add, update, del } from '@/api/http/funApi'
import { Tool } from '@/utils/common/common-tool'

enum api {
  sum = '/diary/sum?',
  contains = '/diary/contains?'
}
export class DiaryApi {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  static getSum(identity = 0, type = 'null', cache = true) {
    const url = `${api.sum}identity=${identity}&type=${type}&cache=${cache}`
    return get(url, false)
  }

  /**
   * 模糊查询
   * @param identity 所有:0|分类:1|标签:2|用户:3|标签+用户:4
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  static async getContains(identity = 0, type = 'null', name = '', cache = true) {
    const data = await get(`${api.contains}identity=${identity}&type=${type}&name=${name}&cache=${cache}`, false)
    Tool.momentTimeList(data)
    return data
  }
}
