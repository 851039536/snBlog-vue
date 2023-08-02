import { useThirdRequest } from '@/hooks/http/axios/useThirdRequest'
const { get } = useThirdRequest()
export function useThirdPartyApi() {
  async function getZhiHuReSou() {
    const ret = await get(`https://tenapi.cn/zhihuresou/`, false)
    return ret
  }

  return {
    getZhiHuReSou
  }
}
