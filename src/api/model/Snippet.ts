export interface Snippet {
  id: number
  name: string
  text: string
  typeId: number
  typeSubId: number
  tagId: number
  userId: number
  snippetVersionId: number
  timeCreate: string
  timeUpdate: string
  tag?: Tag
  type?: Tag
  typeSub?: Tag
  user?: User
}

export interface Tag {
  id: number
  name: string
}

export interface User {
  id: number
  name: string
  nickname: string
}

export const snippet: Snippet = reactive({
  id: 0,
  name: '',
  text: '',
  typeId: 1,
  tagId: 1,
  userId: 0,
  typeSubId: 7,
  snippetVersionId: 0,
  timeCreate: '2021-11-13T03:18:19.821Z',
  timeUpdate: '2021-11-13T03:18:19.821Z'
})

export const removeSnippet = () => {
  snippet.id = 0
  snippet.name = ''
  snippet.text = ''
  snippet.typeId = 1
  snippet.userId = 0
  snippet.tagId = 1
  snippet.typeSubId = 7
  snippet.snippetVersionId = 0
}
