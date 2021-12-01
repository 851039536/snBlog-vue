import request from '@/utils/http/axios'
import { IntArticle } from '@/api/data/interData'
import { tool } from '@/utils/common/tool'

class article {
  /**
   * @description: 查询总数
   * @param {number} identity 所有:0 || 分类:1 || 标签:2
   * @param {string} type
   * @param {boolean} cache
   */
  static GetCountAsync(identity: number, type: string, cache: boolean) {
    return request({
      url: `/api/SnArticle/GetCountAsync?identity=${identity}&type=${type}&cache=${cache}`,
      method: 'get'
    })
  }

  /**
   * 模糊查询
   * @param identity 无条件:0 || 分类:1 || 标签:2
   * @param type 查询条件
   * @param name 查询字段
   * @param cache 缓存
   */
  static async GetContainsAsync(identity: number, type: string, name: string, cache: boolean) {
    const res = await request({
      url: `/api/SnArticle/GetContainsAsync?identity=${identity}&type=${type}&name=${name}&cache=${cache}`,
      method: 'get'
    })
    tool.MomentTimeList(res)
    return res
  }

  /**
   * @description: 主键查询
   * @param {number} id
   * @param {boolean} cache
   */
  static async GetByIdAsync(id: number, cache: boolean): Promise<any> {
    return request({
      url: `/api/SnArticle/GetByIdAsync?id=${id}&cache=${cache}`,
      method: 'get'
    })
  }

  /**
   * 条件查询 GetTypeAsync
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static async GetTypeAsync(identity: number, type: string, cache: boolean): Promise<any> {
    return request({
      url: `/api/SnArticle/GetTypeAsync?identity=${identity}&type=${type}&cache=${cache}`,
      method: 'get'
    })
  }

  /**
   * 读取字段
   * @param identity 0:所有: 分类:1 || 标签:2 || 用户:3
   * @param type 1-内容-2:阅读-3:点赞
   * @param name 查询参数
   * @param cache 缓存
   */
  static async GetSumAsync(identity: number, type: number, name: string, cache: boolean): Promise<any> {
    return request({
      url: `/api/SnArticle/GetSumAsync?identity=${identity}&type=${type}&name=${name}&cache=${cache}`,
      method: 'get'
    })
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
  static async GetFyAsync(
    identity: number,
    type: string | undefined,
    pageIndex: number,
    pagesize: number,
    ordering: string,
    isDesc: boolean,
    cache: boolean
  ) {
    const res = await request({
      url: `/api/SnArticle/GetFyAsync?identity=${identity}&type=${type}&pageIndex=${pageIndex}&pageSize=${pagesize}&ordering=${ordering}&isDesc=${isDesc}&cache=${cache}`,
      method: 'get'
    })
    await tool.MomentTimeList(res)
    return res
  }

  /**
   * @description: 更新
   * @param {any} resultData
   * @param {string} type
   */
  static async UpdatePortionAsync(resultData: any, type: string): Promise<any> {
    return request({
      // 更新
      url: `/api/SnArticle/UpdatePortionAsync?type=${type}`,
      method: 'put',
      data: resultData
    })
  }

  /**
   * @description: 新增数据
   * @param {any} resultData
   */
  static async AddAsync(resultData: IntArticle) {
    return request({
      url: '/api/SnArticle/AddAsync',
      method: 'post',
      data: resultData
    })
  }

  /**
   * @description: 更新数据
   * @param {IntArticle} resultData
   */
  static async UpdateAsync(resultData: IntArticle) {
    return request({
      url: '/api/SnArticle/UpdateAsync',
      method: 'put',
      data: resultData
    })
  }

  /**
   * @description: 删除
   * @param {number} id
   * @return {*}
   */
  static async DeleteAsync(id: number) {
    return request({
      url: `/api/SnArticle/DeleteAsync?id=${id}`,
      method: 'delete'
    })
  }
}

export { article }
