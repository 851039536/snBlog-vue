import { get, add, update, del } from '@/api/http/funApi'

export class SnippetApi {
  /**
   * 条件查询 GetTypeAsync
   * @param identity 分类:1 || 标签:2
   * @param type 查询条件
   * @param cache 缓存
   * @returns
   */
  static getType(identity: number, type: string, cache: boolean) {
    return get(`/article/type?identity=${identity}&type=${type}&cache=${cache}`, false)
  }

  /**
   * 内容统计
   * @param identity 所有:0|分类:1|标签:2|用户账号:3
   * @param name 查询参数
   * @param cache 缓存
   */
  static getStrSum(identity: number, name: string, cache: boolean): Promise<any> {
    return get(`/snippet/strSum?identity=${identity}&name=${name}&cache=${cache}`, false)
  }

  /**
   * @description: 新增数据
   * @param entity
   */
  static add(entity: any) {
    return add('/snippet/add', entity, true)
  }

  /**
   * @description: 更新数据
   * @param {Snippet} entity
   */
  static update(entity: any) {
    return update(`/snippet/edit`, entity)
  }

  /**
   * @description: 删除
   * @param {number} id
   */
  static del(id: number) {
    return del(`/snippet/del?id=${id}`, false)
  }
}
