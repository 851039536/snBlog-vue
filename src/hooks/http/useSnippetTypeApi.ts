import { useRequest } from '@/hooks/http/axios/useRequest'
const { get } = useRequest()
export function useSnippetTypeApi() {
  function getAll(cache: boolean) {
    return get(`/snippetType/all?cache=${cache}`)
  }
  return { getAll }
}
