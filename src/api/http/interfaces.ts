import request from '@/utils/http/axios'
import { IInterface } from '../data/interData'

class interfacesApi {
  /**
   * @description: 条件查询
   * @param {number} identity 分类和用户:0 || 用户:1 || 分类:2
   * @param {string} users 条件:用户
   * @param {string} type 条件:类别
   * @param {boolean} cache 缓存
   */
  static GetType(identity: number, users: string, type: string, cache: boolean) {
    return request(
      {
        url: `/api/SnInterface/GetTypeAsync?identity=${identity}&users=${users}&type=${type}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  static GetAllAsync(cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnInterface/GetAllAsync?cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
  static GetFy(identity: number, type: string, pageIndex: number, pageSize: number) {
    return request(
      {
        url: `/api/SnInterface/GetPagingAsync?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pageSize}&ordering=id&isDesc=true&cache=false`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 新增数据
   * @param {IInterface} rData
   */
  static AddAsync(rData: IInterface) {
    return request(
      {
        url: '/api/SnInterface/AddAsync',
        method: 'post',
        data: rData
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 更新数据
   * @param {IInterface} entity
   */
  static Update(entity: IInterface) {
    return request(
      {
        url: '/api/SnInterface/UpdateAsync',
        method: 'put',
        data: entity
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static Del(id: number) {
    return request(
      {
        url: `/api/SnInterface/DelAsync?id=${id}`,
        method: 'delete'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static GetById(id: number, cache = false) {
    return request(
      {
        url: `/api/SnInterface/GetByIdAsync?id=${id}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}

export { interfacesApi }
