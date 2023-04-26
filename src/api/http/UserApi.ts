import { get, add, update, del } from '@/api/http/funApi'
import { IUser } from '../data/model/UserModel'

enum API {
  LOGIN = '/user/login?user='
}
export class UserApi {
  static getById(id: number) {
    return get(`/user/byid?id=${id}&cache=false`)
  }

  static login(user: string, pwd: string) {
    return get(`${API.LOGIN}${user}&pwd=${pwd}`)
  }
  static getPaging(pageIndex: number, pageSize: number) {
    return get(`/user/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`)
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
