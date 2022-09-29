/**
 * @description:tag
 */
export interface ITag {
  id: number
  name: string
  description: string
}
export const tagForm: ITag = reactive({
  id: 0,
  name: '',
  description: ''
})
