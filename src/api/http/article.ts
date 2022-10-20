import request from '@/utils/http/axios'
import { IArticle } from '@/api/data/interData'
import { tool } from '@/utils/common/tool'
// enum Api {
//   FY = '/api/v1/article/fy/',
//   SUM = '/api/v1/article/count/',
//   BYID = '/api/v1/article/by-id/',
//   CONTAINS = '/api/v1/article/contains/',
//   ADD = '/api/v1/article',
//   UPDATE = '/api/v1/article',
//   DELETE = '/api/v1/article/'
// }
class articleApi {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0 || 分类:1 || 标签:2
   * @param {string} type
   * @param {boolean} cache
   */
  static GetCountAsync(identity: number, type: string, cache: boolean) {
    return request(
      {
        url: `/api/SnArticle/GetCountAsync?identity=${identity}&type=${type}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 模糊查询
   * @param identity 无条件:0 || 分类:1 || 标签:2
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  static async GetContains(identity: number, type: string, name: string, cache: boolean) {
    const res = await request(
      {
        url: `/api/SnArticle/GetContainsAsync?identity=${identity}&type=${type}&name=${name}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
    tool.MomentTimeList(res)
    return res
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static GetById(id: number, cache: boolean) {
    return request(
      {
        url: `/api/SnArticle/GetByIdAsync?id=${id}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 条件查询 GetTypeAsync
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static GetType(identity: number, type: string, cache: boolean) {
    return request(
      {
        url: `/api/SnArticle/GetTypeAsync?identity=${identity}&type=${type}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * 读取字段
   * @param identity 0:所有: 分类:1 || 标签:2 || 用户:3
   * @param type 1-内容-2:阅读-3:点赞
   * @param name 查询参数
   * @param cache 缓存
   */
  static GetSum(identity: number, type: number, name: string, cache: boolean): Promise<any> {
    return request(
      {
        url: `/api/SnArticle/GetSumAsync?identity=${identity}&type=${type}&name=${name}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 分页查询
   * @param {number} identity 所有:0 || 分类:1 || 标签:2 || 用户:3 || 标签,用户: 4
   * @param {number} type 查询参数-(多条件,分割)
   * @param {number} pagesize 当前页码
   * @param {number} pageIndex 每页记录条数
   * @param {string} ordering 排序[data:时间 read:阅读 give:点赞 id:主键]
   * @param {boolean} isDesc 升序/降序
   * @param {boolean} cache 是否开启缓存
   */
  static async GetFy(
    identity: number,
    type: string | undefined,
    pageIndex: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    const res = await request(
      {
        url: `/api/SnArticle/GetFyAsync?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
        method: 'get'
      },
      {
        qiXiao_cancel: false
      }
    )
    await tool.MomentTimeList(res)
    return res
  }

  /**
   * @description: 更新
   * @param {any} resultData
   * @param {string} type
   */
  static UpdatePortion(resultData: any, type: string): Promise<any> {
    return request(
      {
        // 更新
        url: `/api/SnArticle/UpdatePortionAsync?type=${type}`,
        method: 'put',
        data: resultData
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 新增数据
   * @param {any} resultData
   */
  static AddAsync(resultData: IArticle) {
    return request(
      {
        url: '/api/SnArticle/AddAsync',
        method: 'post',
        data: resultData
      },
      {
        qiXiao_cancel: false
      }
    )
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} resultData
   */
  static Update(resultData: IArticle) {
    return request(
      {
        url: '/api/SnArticle/UpdateAsync',
        method: 'put',
        data: resultData
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
        url: `/api/SnArticle/DeleteAsync?id=${id}`,
        method: 'delete'
      },
      {
        qiXiao_cancel: false
      }
    )
  }
}

export { articleApi }
