import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add, update, del } = useRequest()
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()

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
    await momentTimeList(data)
    return data
  }
  static getById(id: number, cache = false) {
    return get(`/diary/bid?id=${id}&cache=${cache}`)
  }

  /**
   * 字段统计
   * @param type text:内容字段数-read:阅读数量-give:点赞数量
   * @param cache
   * @returns
   */
  static getStrSum(type = 'text', cache = false) {
    return get(`/diary/strSum?type=${type}&cache=${cache}`)
  }

  /**
   * 分页查询
   * @param identity 所有:0 || 分类:1 || 用户:2
   * @param type 查询条件
   * @param pageIndex 页码
   * @param pageSize 页数
   * @param ordering 排序字段
   * @param isDesc 是否倒序
   * @param cache 缓存
   * @returns 实体列表
   */
  static getPaging(
    identity = 0,
    type = 'null',
    pageIndex = 1,
    pageSize = 10,
    ordering = 'id',
    isDesc = true,
    cache = false
  ) {
    return get(
      `/diary/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`
    )
  }

  static upPortion(entity: any, type = 'read') {
    return update(`/diary/upPortion?type=${type}`, entity)
  }

  /**
   * @description: 新增
   * @param {IArticle} entity
   */
  static add(entity: any) {
    return add('/diary/add', entity)
  }

  /**
   * @description: 更新
   * @param {IntArticle} entity
   */
  static update(entity: any) {
    return update(`/diary/update`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/diary/del?id=${id}`)
  }
}
