import { pot } from '@/api/http/funApi'

export class CommonApi {
  /**
   * @description: sql备份
   */
  static SqlBackups() {
    return pot(`/angleSharp/SqlBackups?path=null`)
  }
}
