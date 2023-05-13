import { get, add, update, del } from '@/api/http/funApi'

export class DiaryTypeApi {
  static getAll(cache = true) {
    const url = `/diaryType/all?cache=${cache}`
    return get(url, false, true)
  }
  static getById(id: number, cache = false) {
    const url = `/diaryType/byId?id=${id}&cache=${cache}`
    return get(url, false, true)
  }
  static getSum(cache = false) {
    const url = `/diaryType/sum?cache=${cache}`
    return get(url, false, true)
  }

  static add(entity: any) {
    const url = '/diaryType/add'
    return add(url, entity)
  }

  static update(entity: any) {
    const url = `/diaryType/update`
    return update(url, entity)
  }

  static del(id: number) {
    const url = `/diaryType/del?id=${id}`
    return del(url)
  }
}
