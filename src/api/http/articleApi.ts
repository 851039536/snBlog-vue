import request from '@/utils/http/axios'
import { IArticle } from '@/api/data/interData'
import { tool } from '@/utils/common/tool'
import { get, add, update, del } from '@/utils/http/funApi'
class articleApi {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  static GetSum(identity = 0, type = 'null', cache = true) {
    const url = `/article/sum?identity=${identity}&type=${type}&cache=${cache}`
    return get(url, false)
  }

  /**
   * 模糊查询
   * @param identity 所有:0|分类:1|标签:2|用户:3|标签+用户:4
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  static async GetContains(identity = 0, type = 'null', name = '', cache = true) {
    const data = await request(`/article/contains?identity=${identity}&type=${type}&name=${name}&cache=${cache}`, false)
    tool.MomentTimeList(data)
    return data
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static GetById(id: number, cache = false) {
    return get(`/article/byid?id=${id}&cache=${cache}`, false)
  }
  /**
   * 条件查询 GetTypeAsync
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static GetType(identity: number, type = 'null', cache = true) {
    return get(`/article/type?identity=${identity}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 内容统计
   * @param identity 所有:0|分类:1|标签:2|用户:3
   * @param type 内容:1|阅读:2|点赞:3
   * @param name 查询参数
   * @param cache 缓存
   */
  static GetStrSum(identity: number, type: number, name = 'null', cache = true): Promise<any> {
    return get(`/article/strSum??identity=${identity}&type=${type}&name=${name}&cache=${cache}`, false)
  }

  /**
   * @description: 分页查询
   * @param {number} identity 所有:0|分类:1|标签:2|用户:3|标签+用户:4
   * @param {number} type 查询参数(多条件以','分割)
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序规则 data:时间|read:阅读|give:点赞|id:主键
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  static async GetPaging(
    identity = 0,
    type = 'null',
    pageIndex = 1,
    pagesize = 6,
    ordering = 'id',
    isDesc = true,
    cache = true
  ) {
    const data = await get(
      `/article/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      false
    )
    await tool.MomentTimeList(data)
    return data
  }

  /**
   * @description: 条件更新
   * @param {any} entity
   * @param {string} type
   */
  static UpdatePortion(entity: any, type: string): Promise<any> {
    return update(`/article/upPortion?type=${type}`, entity)
  }

  /**
   * @description: 新增数据
   * @param {IArticle} entity
   */
  static Add(entity: IArticle) {
    return add('/article/add', entity)
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} entity
   */
  static Update(entity: IArticle) {
    return update(`/article/edit`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static Del(id: number) {
    return del(`/article/del?id=${id}`, false)
  }
}

export { articleApi }
