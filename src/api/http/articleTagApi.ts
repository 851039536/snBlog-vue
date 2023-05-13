import { get, add, update, del } from '@/api/http/funApi'
import { IArticleTag } from '../data/InterData'

enum api {
  sum = '/article/sum?',
  contains = '/article/contains?',
  byid = '/articleTag/byId?'
}
export class ArticleTagApi {
  /**
   * @description: 根据 ID 获取文章标签
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache = false) {
    const url = `${api.byid}id=${id}&cache=${cache}`
    return get(url, false)
  }

  static getPaging(pageIndex = 1, pagesize = 6, isDesc = true, cache = true) {
    const url = `/articleTag/paging?pageIndex=${pageIndex}&pageSize=${pagesize}&isDesc=${isDesc}&cache=${cache}`
    return get(url, false, true)
  }

  static getSum(cache = false) {
    const url = `/articleTag/sum?cache=${cache}`
    return get(url, false, true)
  }

  static add(entity: IArticleTag) {
    const url = '/articleTag/add'
    return add(url, entity)
  }

  static update(entity: IArticleTag) {
    const url = `/articleTag/update`
    return update(url, entity)
  }

  static del(id: number) {
    const url = `/articleTag/del?id=${id}`
    return del(url, false)
  }
}
