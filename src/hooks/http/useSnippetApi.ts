import { useApi } from '@hooksHttp/axios/useApi'
const { get } = useApi()
export function useSnippetApi() {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0|分类:1|标签:2|用户3
   * @param {string} type 条件
   * @param {boolean} cache 缓存
   */
  async function getSnippetSum(identity: number, type: string, cache: boolean) {
    const ret = await get(`/snippet/sum?identity=${identity}&type=${type}&cache=${cache}`, false)
    return ret
  }

  return {
    getSnippetSum
  }
}
