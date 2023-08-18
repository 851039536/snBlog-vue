import { Article } from '@/hooks/http/model/Article'

import { get, add, update, del } from '@api/http/funApi'
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()
enum api {
  sum = '/article/sum?',
  contains = '/article/contains?',
  type = '/article/type?',
  paging = '/article/paging?'
}

export class ArticleApi {
  /**
   * @description: 分页查询
   * @param {number} identity 所有:0|分类:1|标签:2|用户:3|标签+用户:4
   * @param {number} type 查询参数(多条件以','分割)
   * @param {number} pageSize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序规则 data:时间|read:阅读|give:点赞|id:主键
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  static async getPaging(
    identity = 0,
    type = 'null',
    pageIndex = 1,
    pageSize = 6,
    ordering = 'id',
    isDesc = true,
    cache = true
  ) {
    const data = await get(
      `${api.paging}identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    await momentTimeList(data.data)
    return data
  }

  /**
   * @description: 条件更新
   * @param {any} entity
   * @param {string} type
   */
  static updatePortion(entity: any, type: string): Promise<any> {
    return update(`/article/upPortion?type=${type}`, entity)
  }

  /**
   * @description: 新增
   * @param {any} entity
   */
  static add(entity: Article) {
    return add('/article/add', entity)
  }

  /**
   * @description: 更新
   * @param {any} entity
   */
  static update(entity: Article) {
    return update(`/article/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/article/del?id=${id}`, false)
  }
}
