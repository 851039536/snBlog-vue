import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
import { Article } from '@hooksHttp/model/Article'
import { add, update } from '@api/http/funApi'

const { momentTimeList } = useMomentTime()
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
   * 内容统计
   * @param identity 所有:0|分类:1|标签:2|用户:3
   * @param type 内容:1|阅读:2|点赞:3
   * @param name 查询参数
   * @param cache 缓存
   */
  async function getStrSum(identity: number, type: number, name = 'null', cache = true): Promise<any> {
    return get(`${api.strSum}identity=${identity}&type=${type}&name=${name}&cache=${cache}`, false)
  }
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  async function getSum(identity = 0, type = 'null', cache = true) {
    return get(`${api.sum}identity=${identity}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 条件查询
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  async function getType(identity: number, type = 'null', cache = true) {
    return get(`${api.type}identity=${identity}&type=${type}&cache=${cache}`, false)
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
    getSum,
    getContains,
    getById,
    getType,
    getStrSum,
    dels,
    adds,
    updates
  }
}
