import { Article } from '@/hooks/http/model/Article'

import { get, add, update, del } from '@api/http/funApi'
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()
enum api {
  sum = '/article/sum?',
  contains = '/article/contains?',
  bid = '/article/bid?',
  type = '/article/type?',
  strSum = '/article/strSum?',
  paging = '/article/paging?'
}

export class ArticleApi {
  /**
   * 条件查询
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static getType(identity: number, type = 'null', cache = true) {
    return get(`${api.type}identity=${identity}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 内容统计
   * @param identity 所有:0|分类:1|标签:2|用户:3
   * @param type 内容:1|阅读:2|点赞:3
   * @param name 查询参数
   * @param cache 缓存
   */
  static getStrSum(identity: number, type: number, name = 'null', cache = true): Promise<any> {
    return get(`${api.strSum}identity=${identity}&type=${type}&name=${name}&cache=${cache}`, false)
  }

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
   * @param {IArticle} entity
   */
  static add(entity: Article) {
    return add('/article/add', entity)
  }

  /**
   * @description: 更新
   * @param {IArticle} entity
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
