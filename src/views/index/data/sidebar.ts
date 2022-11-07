import { articleApi, navigationApi, sort, userTalk } from '@api/index'
import { winUrl } from '@/hooks/routers'

interface Res {
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
  title: string
  navType: any
}
export const rData: Res = reactive({
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
  title: '',
  navType: []
})

export class method {
  /**
   * @description: 搜素框模糊查询
   * @param {string} name 名称
   */
  static async Search(name: string) {
    await articleApi.GetContains(0, 'null', name, false).then(res => {
      rData.articleData1 = res.data
    })
  }

  static async skip(id: number) {
    await winUrl(`/VmdHtml?id=${id}`)
  }

  static async GetApi() {
    rData.navType = await (await navigationApi.GetTypeAsync(1, '常用工具', true)).data

    rData.sortData = await (await sort.GetAll(true)).data
    rData.articleStr = await (await articleApi.GetFy(0, 'null', 1, 1, 'id', true, true)).data[0].timeCreate
    rData.userTalk = await (await userTalk.GetUserTalkFirst()).data
    rData.articleCount = await (await articleApi.GetCountAsync(0, 'null', true)).data
    rData.articleCount = String(rData.articleCount)
    rData.textCount = await (await articleApi.GetSum(0, 1, 'null', true)).data
    rData.textCount = String(rData.textCount)
    rData.readCount = await (await articleApi.GetSum(0, 2, 'null', true)).data
    rData.readCount = String(rData.readCount)
  }
}
