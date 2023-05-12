import { get } from './funApi'

export class SetBlogApi {
  static getById(id: number, cache: boolean) {
    return get(`/api/SnSetBlog/GetByIdAsync?id=${id}&cache=${cache}`, false, true)
  }
}
