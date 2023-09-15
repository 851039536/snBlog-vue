import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()
const { get, update } = useRequest()

enum Api {
  name = '/snippet/'
}
export function useSnippetApi() {
  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  async function getById(id: number, cache: boolean) {
    const ret = await get(`/snippet/bid?id=${id}&cache=${cache}`, false)
    return ret
  }
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  async function getSum(identity: number, type: string, cache: boolean) {
    const ret = await get(`${Api.name}sum?identity=${identity}&type=${type}&cache=${cache}`, false)
    return ret
  }

  /**
   * 模糊查询
   * @param identity   所有:0|分类:1|标签:2|用户名:3|内容:4|标题:5</param>
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  async function contains(identity: number, type: string, name: string, cache = true, pageIndex = 1, pageSize = 2) {
    const url = `${Api.name}contains?identity=${identity}&type=${type}&name=${name}&cache=${cache}&pageIndex=${pageIndex}&pageSize=${pageSize}`
    const ret = await get(url, false, false)
    return ret
  }

  /**
   * 内容统计
   * @param identity 所有:0|分类:1|标签:2|用户账号:3
   * @param name 查询参数
   * @param cache 缓存
   */
  function getStrSum(identity: number, name: string, cache: boolean): Promise<any> {
    return get(`/snippet/strSum?identity=${identity}&name=${name}&cache=${cache}`, false)
  }
  /**
   * @description: 分页查询
   * @param {number} identity 所有:0|分类:1|标签:2|用户:3|子标签:4
   * @param {number} type 查询参数(多条件以','分割)
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序规则 data:时间|read:阅读|give:点赞|id:主键
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  async function getPaging(
    identity: number,
    type: string | undefined,
    pageIndex: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    const ret = await get(
      `${Api.name}paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      false,
      false
    )
    await momentTimeList(ret)
    return ret
  }

  /**
   * @description: 更新
   * @param {Snippet} entity
   */
  function up(entity: any) {
    return update(`/snippet/edit`, entity)
  }

  return {
    getSum,
    getContains: contains,
    getPaging,
    getStrSum,
    getById,
    up
  }
}
