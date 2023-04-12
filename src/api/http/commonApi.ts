import { get, add, update, del, pot } from '@/utils/http/funApi'

class commonApi {
  /**
   * @description: sql备份
   */
  static SqlBackups() {
    return pot(`/angleSharp/SqlBackups?path=null`)
  }
}

export { commonApi }
