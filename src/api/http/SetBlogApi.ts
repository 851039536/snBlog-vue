import request from '@/api/http/axios'

export class SetBlogApi {
  static getById(id: number, cache: boolean) {
    return request(
      {
        url: `/api/SnSetBlog/GetByIdAsync?id=${id}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}
