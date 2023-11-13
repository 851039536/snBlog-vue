import { useRequest } from '@hooks/http/axios/useRequest'

const { get } = useRequest()

export class LeaveApi {
  static getAll(): Promise<any> {
    return get('/api/Snleave/GetAllAsync')
  }
}
