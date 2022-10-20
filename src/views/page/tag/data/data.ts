interface RData {
  articleData?: any
  arrayLabel?: any
  blog?: string
}
export const rData: RData = reactive({
  articleData: [],
  arrayLabel: [],
  blog: ''
})
