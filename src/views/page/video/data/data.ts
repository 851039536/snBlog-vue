interface State {
  rData: any
  page: number
  pagesize: number
  count: number
  current: number
}
const state: State = reactive({
  rData: [],
  page: 1,
  pagesize: 6,
  count: 0,
  current: 1
})

export { state }
