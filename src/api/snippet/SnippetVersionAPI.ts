import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add } = useRequest()

export class SnippetVersionAPI {
  /**
   * 总数查询
   * @param idx 1:根据snId查询 0:默认
   * @param snid
   * @param cache
   * @returns
   */
  static getSum(idx: number, snid: number, cache = false) {
    return get(`/snippetVersion/sum?identity=${idx}&snippetId=${snid}&cache=${cache}`)
  }

  /**
   * 根据主表主键查询
   * @param snippetId
   * @param cache
   * @returns
   */
  static getSnippetId(snippetId: number, cache = false) {
    return get(`/snippetVersion/snippetId?snippetId=${snippetId}&cache=${cache}`)
  }
  /**
   * 主键查询
   * @param idx
   * @param cache
   * @returns
   */
  static getById(idx: number, cache = false) {
    return get(`/snippetVersion/bid?id=${idx}&cache=${cache}`)
  }

  /**
   * @description: add
   */
  static add(entity: any) {
    return add(`/snippetVersion/add`, entity)
  }
}
