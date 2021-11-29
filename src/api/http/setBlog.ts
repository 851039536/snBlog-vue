import request from '@/utils/http/axios'

export class setBlog {
  static async GetByIdAsync(id: number, cache: boolean): Promise<any> {
    return request({
      url: `/api/SnSetBlog/GetByIdAsync?id=${id}&cache=${cache}`,
      method: 'get'
    })
  }
}
