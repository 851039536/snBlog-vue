import { useRequest } from '@/hooks/http/axios/useRequest'
const { get } = useRequest()
export function useSnippetTagApi() {
  function getAll(cache: boolean) {
    return get(`/snippetTag/all?cache=${cache}`)
  }
  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  function getById(id: number, cache = false) {
    return get(`/snippetTag/byId?id=${id}&cache=${cache}`, false)
  }

  return { getAll, getById }
}
