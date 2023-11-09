import { useRequest } from '@/hooks/http/axios/useRequest'
const { add, get } = useRequest()

export function useSnippetVersionApi() {
  /**
   * @description: add
   */
  function adds(entity: any) {
    return add(`/snippetVersion/add`, entity)
  }
  /**
   * 总数查询
   * @param idx 1:根据snId查询 0:默认
   * @param snid
   * @param cache
   * @returns
   */
  function sum(idx: number, snid: number, cache = false) {
    return get(`/snippetVersion/sum?identity=${idx}&snId=${snid}&cache=${cache}`)
  }

  /**
   * 根据主表主键查询
   * @param idx
   * @param cache
   * @returns
   */
  function bySnId(idx: number, cache = false) {
    return get(`/snippetVersion/bysnid?id=${idx}&cache=${cache}`)
  }
  /**
   * 主键查询
   * @param idx
   * @param cache
   * @returns
   */
  function byId(idx: number, cache = false) {
    return get(`/snippetVersion/bid?id=${idx}&cache=${cache}`)
  }

  return {
    adds,
    sum,
    bySnId,
    byId
  }
}
