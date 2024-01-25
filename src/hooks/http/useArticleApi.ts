import { useRequest } from '@/hooks/http/axios/useRequest'
import { Article } from '@/api/model/Article'
import { add, update } from '@api/http/funApi'

const { get, del } = useRequest()
enum api {
  sum = '/article/sum?',
  contains = '/article/contains?',
  bid = '/article/bid?',
  type = '/article/type?',
  strSum = '/article/strSum?',
  paging = '/article/paging?'
}

export function useArticleApi() {
  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  function getById(id: number, cache = false) {
    return get(`${api.bid}id=${id}&cache=${cache}`, false, true)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  function dels(id: number) {
    return del(`/article/del?id=${id}`, false)
  }

  /**
   * @description: 新增
   * @param {any} entity
   */
  function adds(entity: Article) {
    return add('/article/add', entity)
  }

  /**
   * @description: 更新
   * @param {any} entity
   */
  function updates(entity: Article) {
    return update(`/article/update`, entity)
  }
  return {
    getById,
    dels,
    adds,
    updates
  }
}
