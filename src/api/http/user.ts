import { get, add, update, del } from '@/utils/http/funApi'
import { IUser } from '../data/model/userModel'

enum API {
  LOGIN = '/user/login?user='
}
export class userApi {
  static GetByIdAsync(id: number) {
    return get(`/user/byid?id=${id}&cache=false`)
  }

  static Login(user: string, pwd: string) {
    return get(`${API.LOGIN}${user}&pwd=${pwd}`)
  }
  static GetPaging(pageIndex: number, pageSize: number) {
    return get(`/user/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`)
  }

  static Contains(name: string) {
    return get(`/user/contains?name=${name}&cache=false`)
  }
  static Add(entity: IUser) {
    return add(`/user/add`, entity)
  }
  static Update(entity: IUser) {
    return update(`/user/update`, entity)
  }
  static Del(id: number) {
    return del(`/user/del?id=${id}`)
  }
}
