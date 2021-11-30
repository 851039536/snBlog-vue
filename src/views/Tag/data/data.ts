import { reactive } from 'vue'

interface Res {
  newinfo?: any
  labels?: any
  blog?: string
  fadeIn?: string
  tag?: string
}
export const state: Res = reactive({
  newinfo: [],
  labels: [],
  blog: '',
  fadeIn: 'animate__fadeIn',
  tag: 'tag'
})

export default state
