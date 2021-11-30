import { reactive } from 'vue'

interface State {
  text: any
  type: any
  page: number
  pagesize: number
  count: number
  name: string
  current: number
}
const state: State = reactive({
  text: [],
  type: [],
  page: 1,
  pagesize: 12,
  count: 0,
  name: '',
  current: 1
})

export { state }
