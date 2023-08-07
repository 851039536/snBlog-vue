import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()
const { get } = useRequest()
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
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  async function getSum(identity = 0, type = 'null', cache = true) {
    const url = await get(`${api.sum}identity=${identity}&type=${type}&cache=${cache}`, false)
    return url
  }

  /**
   * 模糊查询
   * @param identity 所有:0|分类:1|标签:2|用户:3|标签+用户:4
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  async function getContains(identity = 0, type = 'null', name = '', cache = true) {
    const data = await get(`${api.contains}identity=${identity}&type=${type}&name=${name}&cache=${cache}`, false, true)
    await momentTimeList(data.data)
    return data
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  function getById(id: number, cache = false) {
    return get(`${api.bid}id=${id}&cache=${cache}`, false, true)
  }
  return {
    getSum,
    getContains,
    getById
  }
}
