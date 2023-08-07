import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
const { get, add } = useRequest()
const { momentTimeList } = useMomentTime()
export function usePhotoGalleryApi() {
  /**
   * @description: 分页查询
   * @param {number} identity 所有:0|分类:1|标签:2|用户:3|标签+用户:4
   * @param {number} type 查询参数(多条件以','分割)
   * @param {number} pageSize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序规则 data:时间|id:主键
   * @param {boolean} isDesc 排序
   * @param {boolean} cache 缓存
   */
  async function getPaging(
    identity = 0,
    type = 'null',
    pageIndex = 1,
    pageSize = 6,
    ordering = 'id',
    isDesc = true,
    cache = true
  ) {
    const ret = await get(
      `/photoGallery/paging?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      false,
      true
    )
    await momentTimeList(ret.data)
    return ret
  }

  function adds(params: any) {
    return add('/photoGallery/add', params)
  }

  return {
    getPaging,
    adds
  }
}
