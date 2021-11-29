import { reactive } from 'vue'

interface Res {
  spinning: boolean
  show: boolean
}

export const resData: Res = reactive({
  spinning: true,
  show: true
})
export default { resData }
