export interface IVideo {
  id: number
  name: string
  img: string
  typeId: number
  userId: number
  timeCreate: any
  timeModified: any
  url: string
}
export const videoForm: IVideo = reactive({
  id: 0,
  name: '',
  img: '',
  typeId: 0,
  userId: 0,
  timeCreate: '',
  timeModified: '',
  url: ''
})
