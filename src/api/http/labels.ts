import request from '@/utils/http/axios'

class labels {
  static async GetByIdAsync(id: number) {
    return request({
      url: `/api/SnLabels/GetByIdAsync?id=${id}&cache=true`,
      method: 'get'
    })
  }

  static async GetAllAsync(cache: boolean) {
    return request({
      url: `/api/SnLabels/GetAllAsync?cache=${cache}`,
      method: 'get'
    })
  }
}

export { labels }
