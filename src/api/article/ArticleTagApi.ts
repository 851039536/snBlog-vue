import { ArticleTag } from '../model/InterData'
import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add, update, del } = useRequest()

enum api {
  sum = '/article/sum?',
  contains = '/article/contains?',
  bid = '/articleTag/byId?'
}
export class ArticleTagApi {
  /**
   * @description: 根据 ID 获取文章标签
   * @param {number} id
   * @param {boolean} cache
   */
  static getById(id: number, cache = false) {
    const url = `${api.bid}id=${id}&cache=${cache}`
    return get(url, false)
  }

  static getPaging(pageIndex = 1, pageSize = 6, isDesc = true, cache = false) {
    const url = `/articleTag/paging?pageIndex=${pageIndex}&pageSize=${pageSize}&isDesc=${isDesc}&cache=${cache}`
    return get(url, false, true)
  }

  static getSum(cache = false) {
    const url = `/articleTag/sum?cache=${cache}`
    return get(url, false, true)
  }

  static add(entity: ArticleTag) {
    const url = '/articleTag/add'
    return add(url, entity)
  }

  static update(entity: ArticleTag) {
    const url = `/articleTag/update`
    return update(url, entity)
  }

  static del(id: number) {
    const url = `/articleTag/del?id=${id}`
    return del(url, false)
  }
}
