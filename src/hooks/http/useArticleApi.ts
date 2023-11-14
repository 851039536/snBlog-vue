import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
import { Article } from '@/api/model/Article'
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
   * 条件查询
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  function getType(identity: number, type = 'null', cache = true) {
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
    getContains,
    getById,
    getType,
    dels,
    adds,
    updates
  }
}
