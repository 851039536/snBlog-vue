import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()
const { get, add, update, del } = useRequest()
enum api {
  sum = '/navigation/sum?',
  contains = '/navigation/contains?',
  bid = '/navigation/bid?',
  type = '/navigation/type?',
  strSum = '/navigation/strSum?',
  paging = '/navigation/paging?'
}
export function useNavigationApi() {
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
   * @param identity 匹配描述，标题，URL:0 || 分类:1 || 用户:2
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
  function getById(id: any, cache = false) {
    return get(`${api.bid}id=${id}&cache=${cache}`, false, true)
  }

  /**
   *
   * @param identity 所有:0|分类:1|标签:2|用户账号:3
   * @param name
   * @param cache
   * @returns
   */
  function getStrSum(identity: number, name: string, cache = false) {
    return get(`/snippet/strSum?identity=${identity}&name=${name}&cache=${cache}`, false, true)
  }

  //所有:0|分类:1|标签:2|用户名:3|子标签:4
  async function getPaging(
    identity: number,
    type: string,
    pageIndex: number,
    pageSize: number,
    isDesc = true,
    cache = false
  ) {
    const ret = await get(
      `/navigation/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=id&isDesc=${isDesc}&cache=${cache}`,
      false,
      true
    )
    await momentTimeList(ret.data)

    return ret
  }

  function adds(entity: any) {
    const url = '/navigation/add'
    return add(url, entity)
  }

  function updates(entity: any) {
    const url = `/navigation/update`
    return update(url, entity)
  }

  function dels(id: number) {
    const url = `/navigation/del?id=${id}`
    return del(url, false)
  }
  return {
    getSum,
    getContains,
    getById,
    getStrSum,
    getPaging,
    adds,
    updates,
    dels
  }
}
