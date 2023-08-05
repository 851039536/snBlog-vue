import { useRequest } from '@/hooks/http/axios/useRequest'
const { get, update, add } = useRequest()
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
  function getByTitle(name: string, cache = false) {
    return get(`/snippetTag/byTitle?name=${name}&cache=${cache}`, false)
  }

  /**
   * @description: 更新
   * @param  entity
   */
  function updates(entity: any) {
    return update(`/snippetTag/update`, entity)
  }

  /**
   * @description: 新增
   * @param {any} entity
   */
  function adds(entity: any) {
    return add('/snippetTag/add', entity)
  }
  return { getAll, getById, updates, getByTitle, adds }
}
