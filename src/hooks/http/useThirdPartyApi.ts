import { useThirdApi } from '@hooksHttp/axios/useThirdApi'
const { get } = useThirdApi()
export function useThirdPartyApi() {
  async function getZhiHuReSou() {
    const ret = await get(`https://tenapi.cn/zhihuresou/`, false)
    return ret
  }

  return {
    getZhiHuReSou
  }
}
