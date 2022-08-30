import request from '@/utils/http/axios'

export class setBlog {
  static GetByIdAsync(id: number, cache: boolean) {
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
