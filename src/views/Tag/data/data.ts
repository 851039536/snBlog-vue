interface ResData {
  resultData?: any
  arrayLabel?: any
  blog?: string
  fadeIn?: string
  tag?: string
}
export const resData: ResData = reactive({
  resultData: [],
  arrayLabel: [],
  blog: '',
  fadeIn: 'animate__fadeIn',
  tag: 'tag'
})

export default resData
