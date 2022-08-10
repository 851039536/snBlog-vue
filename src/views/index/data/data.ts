interface State {
  resData: any
  page: number
  pagesize: number
  count: number
  identity: number
  typeStr: string
  current: number
}
export const state: State = reactive({
  resData: [],
  page: 1,
  pagesize: 8,
  count: 0,
  identity: 0,
  typeStr: 'null',
  current: 1
})
