import request from '@/utils/http/axios'

class labels {
  static GetByIdAsync(id: number) {
    return request(
      {
        url: `/api/SnLabels/GetByIdAsync?id=${id}&cache=true`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  static GetAll(cache: boolean) {
    return request(
      {
        url: `/api/SnLabels/GetAllAsync?cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}

export { labels }
