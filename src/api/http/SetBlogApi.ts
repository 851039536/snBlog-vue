import { useRequest } from '@hooks/http/axios/useRequest'

const { get } = useRequest()

export class SetBlogApi {
  static getById(id: number, cache: boolean) {
    return get(`/api/SnSetBlog/GetByIdAsync?id=${id}&cache=${cache}`, false, true)
  }
}
