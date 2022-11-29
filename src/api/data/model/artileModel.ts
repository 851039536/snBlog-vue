export interface IArticle {
  id: number
  name: string
  sketch: string
  text: string
  read: number
  img: string
  commentId: number
  give: number
  labelId: number
  sortId: number
  userId: number | string
  timeCreate: any
  timeModified: any
}

export const articleForm: IArticle = reactive({
  id: 0,
  name: '',
  sketch: '',
  text: '',
  read: 0,
  img: '',
  commentId: 0,
  give: 0,
  labelId: 1,
  sortId: 1,
  userId: 0,
  timeCreate: '2021-11-13T03:18:19.821Z',
  timeModified: '2021-11-13T03:18:19.821Z'
})

export const clearArticle = () => {
  articleForm.labelId = 1
  articleForm.sortId = 1
  articleForm.userId = 0
  articleForm.id = 0
  articleForm.name = ''
  articleForm.sketch = ''
  articleForm.text = ''
  articleForm.read = 0
  articleForm.img = 'img'
  articleForm.commentId = 0
  articleForm.give = 0
  articleForm.timeCreate = '2021-11-13T03:18:19.821Z'
  articleForm.timeModified = '2021-11-13T03:18:19.821Z'
}
// const state = reactive(clearArticle)
// const resetState = () => {
//   Object.assign(state, clearArticle())
// }
