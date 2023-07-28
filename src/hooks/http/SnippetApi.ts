import { get } from '@api/http/funApi'
export function SnippetsApi() {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  async function GetSum(identity: number, type: string, cache: boolean) {
    const ret = await get(`/snippet/sum?identity=${identity}&type=${type}&cache=${cache}`, false)
    return ret
  }

  return {
    GetSum
  }
}
