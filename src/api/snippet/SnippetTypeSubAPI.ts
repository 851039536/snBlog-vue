import { useRequest } from '@hooks/http/axios/useRequest'

const { get } = useRequest()

export class SnippetTypeSubAPI {
  static getCondition(snippetTypeId: number, cache = false) {
    return get(`/snippetTypeSub/condition?snippetTypeId=${snippetTypeId}&cache=${cache}`, false)
  }

  static getAll(cache = false) {
    return get(`/snippetTypeSub/all?cache=${cache}`)
  }
  static getById(id: number, cache = false) {
    return get(`/snippetTypeSub/byId?id=${id}&cache=${cache}`)
  }
}
