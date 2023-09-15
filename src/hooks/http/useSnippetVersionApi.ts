import { useRequest } from '@/hooks/http/axios/useRequest'
import { useMomentTime } from '@hooks/useMomentTime'
const { momentTimeList } = useMomentTime()
const { add } = useRequest()

export function useSnippetVersionApi() {
  /**
   * @description: add
   */
  function adds(entity: any) {
    return add(`/snippetVersion/add`, entity)
  }

  return {
    adds
  }
}
