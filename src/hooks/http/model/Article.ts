export interface Article {
  id: number
  name: string
  sketch: string
  text: string
  read: number
  give: number
  img: string
  commentId: number
  tagId: number
  typeId: number
  userId: number
  timeCreate: string
  timeModified: string
  tag?: Tag
  type?: Tag
  user?: User
}

export interface Tag {
  id?: number
  name?: string
}

export interface User {
  id: number
  name: string
  nickname: string
}

export const article: Article = reactive({
  id: 0,
  name: '',
  sketch: '',
  text: '',
  read: 0,
  img: '',
  commentId: 0,
  give: 0,
  tagId: 1,
  typeId: 1,
  userId: 0,
  timeCreate: '2021-11-13T03:18:19.821Z',
  timeModified: '2021-11-13T03:18:19.821Z'
})

export const removeArticle = () => {
  article.tagId = 1
  article.typeId = 1
  article.userId = 0
  article.id = 0
  article.name = ''
  article.sketch = ''
  article.text = ''
  article.read = 0
  article.img = 'img'
  article.commentId = 0
  article.give = 0
  article.timeCreate = '2021-11-13T03:18:19.821Z'
  article.timeModified = '2021-11-13T03:18:19.821Z'
}
