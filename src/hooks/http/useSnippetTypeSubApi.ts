import { useRequest } from '@/hooks/http/axios/useRequest'
const { get } = useRequest()

export function useSnippetTypeSubApi() {
  function getCondition(snippetTypeId: number, cache = false) {
    return get(`/snippetTypeSub/condition?snippetTypeId=${snippetTypeId}&cache=${cache}`, false)
  }

  function getAll(cache = false) {
    return get(`/snippetTypeSub/all?cache=${cache}`)
  }
  function getById(id: number, cache = false) {
    return get(`/snippetTypeSub/byId?id=${id}&cache=${cache}`)
  }
  return { getCondition, getAll, getById }
}
