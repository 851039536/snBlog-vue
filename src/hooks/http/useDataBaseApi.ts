import { useRequest } from './axios/useRequest'

const { get } = useRequest()

export function useDataBaseApi() {
  function isToken() {
    return get('/dataBase/token')
  }
  return { isToken }
}
