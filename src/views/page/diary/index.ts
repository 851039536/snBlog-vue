import { message } from 'ant-design-vue'
import { DiaryApi } from '@/api/index'

const state: any = reactive({
  rData: [],
  dataOne: [],
  text: [],
  modal2Visible: false,
  page: 1,
  pagesize: 9,
  count: 0
})

class method {
  static async setModal1Visible(modal2Visible: boolean, id: number) {
    state.modal2Visible = modal2Visible
    await DiaryApi.getById(id, true).then((res: any) => {
      state.text = res.data
      if (res.data !== null) {
        res.data.oneRead += 1
        DiaryApi.upPortion(state.text, 'read')
      }
    })
  }

  static async currentchange(val: number) {
    state.page = val
    await DiaryApi.getPaging(0, '0', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.rData = res.data
    })
  }

  static async Count() {
    await DiaryApi.getSum(0, '', true).then((result: any) => {
      state.count = result.data
    })
  }

  static async getOne() {
    await DiaryApi.getPaging(0, '0', state.page, state.pagesize, 'id', true, true).then((res: any) => {
      state.rData = res.data
    })
    await DiaryApi.getPaging(0, '0', 1, 1, 'id', true, true).then((res: any) => {
      const { title, text } = res.data[0]
      state.dataOne = { title, text }
    })
  }

  static async give(id: any) {
    message.info('已点赞')
    await DiaryApi.getById(id, true).then((res: any) => {
      if (res.data !== null) {
        res.data.oneGive += 1
        DiaryApi.upPortion(res.data, 'give')
      }
    })
  }
}

export { state, method }
