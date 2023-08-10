import { useRequest } from '@/hooks/http/axios/useRequest'
const { get } = useRequest()
export function useNavigationTypeApi() {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  async function getAll(cache = false) {
    const url = await get(`/navigationType/all?cache=${cache}`, false)
    return url
  }

  return {
    getAll
  }
}
