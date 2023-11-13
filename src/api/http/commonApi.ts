import { useRequest } from '@hooks/http/axios/useRequest'

const { pot } = useRequest()

export class CommonApi {
  /**
   * @description: sql备份
   */
  static SqlBackups() {
    return pot(`/angleSharp/SqlBackups?path=null`)
  }
}
