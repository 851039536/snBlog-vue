import { useRequest } from '@hooks/http/axios/useRequest'

const { get, add, update, del } = useRequest()
import { IUser } from '../model/UserModel'

enum API {
  LOGIN = '/user/login?userName='
}
export class UserApi {
  static getById(id: number, cache: boolean) {
    return get(`/user/bid?id=${id}&cache=${cache}`)
  }

  static login(user: string, pwd: string) {
    return get(`${API.LOGIN}${user}&pwd=${pwd}`)
  }
  static async getPaging(pageIndex: number, pageSize: number, isDesc: boolean, cache: boolean) {
    const ret = await get(`/user/paging?pageIndex=${pageIndex}&pageSize=${pageSize}&isDesc=${isDesc}&cache=${cache}`)
    return ret
  }

  static contains(name: string) {
    return get(`/user/contains?name=${name}&cache=false`)
  }
  static add(entity: IUser) {
    return add(`/user/add`, entity)
  }
  static update(entity: IUser) {
    return update(`/user/update`, entity)
  }
  static del(id: number) {
    return del(`/user/del?id=${id}`)
  }
}
