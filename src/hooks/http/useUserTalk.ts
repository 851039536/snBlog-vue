import { get } from '@/api/http/funApi'
export function useUserTalk() {
  /**
   * @description: 分页查询
   * @param {number} identity 所有:0|用户:1
   * @param {number} type 查询参数(多条件以','分割)
   * @param {number} pageSize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序规则 data:时间|id:主键
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  async function GetUserTalkPaging(
    identity = 0,
    type = 'null',
    pageIndex = 1,
    pageSize = 6,
    ordering = 'id',
    isDesc = true,
    cache = true
  ) {
    const ret = await get(
      `/userTalk/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      false,
      true
    )
    return ret
  }

  return {
    GetUserTalkPaging
  }
}
