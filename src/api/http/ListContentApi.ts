import { useRequest } from '@hooks/http/axios/useRequest'

const { get } = useRequest()
export class ListContentApi {
  static cnblogs() {
    return get('/api/AngleSharp/Cnblogs', false, true)
  }
}
