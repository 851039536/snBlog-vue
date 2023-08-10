import { useRequest } from './axios/useRequest'

const { get } = useRequest()

export function useDataBaseApi() {
  function isToken() {
    return get('/dataBase/token')
  }

  // onMounted(() => {
  //   isToken()
  //   console.log('[  ]-13')
  // })
  return { isToken }
}
