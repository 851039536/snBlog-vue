/*
 * @Author: your name
 * @Date: 2021-09-15 10:39:08
 * @LastEditTime: 2021-11-11 15:14:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blogs-s\src\views\index\data.ts
 */

import { article, labels, sort, usertalk } from '@/api/index'
import { winUrl } from '@/hooks/routers'
import { reactive } from 'vue'

interface Res {
  labelsData: any
  sortData: any
  articleData: any
  articleData1: any
  userTalk: string
  user: any
  articleCount: string
  sortCount: string
  labelsCount: string
  textCount: string
  readCount: string
  articleStr: string
  sntitle: string
}
export const resData: Res = reactive({
  labelsData: [],
  sortData: [],
  articleData: [],
  articleData1: [],
  userTalk: '',
  user: [],
  articleCount: '0',
  sortCount: '0',
  labelsCount: '0',
  textCount: '0',
  readCount: '0',
  articleStr: '',
  sntitle: ''
})

export class method {
  /**
   * @description: 搜素框模糊查询
   * @param {string} name 名称
   */
  static async Search(name: string) {
    await article.GetContainsAsync(0, 'null', name, false).then((res) => {
      resData.articleData1 = res.data
    })
  }
  static async skip(id: number) {
    winUrl('/VmdHtml?id=' + id)
  }
  static async GetApi() {
    resData.labelsData = await (await labels.GetAllAsync(true)).data
    resData.sortData = await (await sort.GetAllAsync(true)).data
    resData.articleStr = await (await article.GetFyAsync(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
    resData.userTalk = await (await usertalk.GetUserTalkFirst()).data
    resData.articleCount = await (await article.GetCountAsync(0, 'null', true)).data
    resData.articleCount = String(resData.articleCount)
    resData.textCount = await (await article.GetSumAsync(0, 1, 'null', true)).data
    resData.textCount = String(resData.textCount)
    resData.readCount = await (await article.GetSumAsync(0, 2, 'null', true)).data
    resData.readCount = String(resData.readCount)
  }
}
