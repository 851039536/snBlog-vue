import { reactive } from 'vue'

interface ResData {
  text: any
  type: any
  page: number
  pagesize: number
  count: number
  name: string
  current: number
}
export const resData: ResData = reactive({
  text: [],
  type: [],
  page: 1,
  pagesize: 12,
  count: 0,
  name: '',
  current: 1
})
