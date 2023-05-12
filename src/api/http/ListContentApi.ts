import { get } from './funApi'

export class ListContentApi {
  static cnblogs() {
    return get('/api/AngleSharp/Cnblogs', false, true)
  }
}
