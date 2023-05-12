import { get } from './funApi'

export class LeaveApi {
  static getAll(): Promise<any> {
    return get('/api/Snleave/GetAllAsync')
  }
}
